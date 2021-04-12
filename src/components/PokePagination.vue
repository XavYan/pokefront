<template>
  <div class="pagination">
    <div class="pagination-control">
      <div>
        <div class="pagination-arrows">
          <button
            type="button"
            @click="startPage"
          >
            <font-awesome-icon :icon="['fas', 'angle-double-left']" />
          </button>
          <button
            type="button"
            @click="previousPage"
          >
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
          </button>
          <button
            type="button"
            @click="nextPage"
          >
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </button>
          <button
            type="button"
            @click="finalPage"
          >
            <font-awesome-icon :icon="['fas', 'angle-double-right']" />
          </button>
        </div>
        <div class="pagination-index">
          {{ appliedOffset + 1 }} - {{ appliedOffset + appliedLimit }}
        </div>
      </div>
      <div class="pagination-limit">
        <button
          type="button"
          class="limit-active"
          @click="setNewActiveLimit"
        >
          20
        </button>
        <button
          type="button"
          @click="setNewActiveLimit"
        >
          50
        </button>
        <button
          type="button"
          @click="setNewActiveLimit"
        >
          100
        </button>
      </div>
    </div>
    <div class="pokecards">
      <poke-card
        v-for="(pokemon, index) in pokemons"
        :key="index"
        :src="pokemon"
      />
    </div>
  </div>
</template>

<script>
import PokeCard from './PokeCard.vue'

const API_PATH = 'https://pokeapi.co/api/v2'

export default {
  name: 'PokePagination',
  components: {
    PokeCard
  },
  props: {
    offset: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      pokemons: [],
      count: 0,
      appliedOffset: 0,
      appliedLimit: 0
    }
  },
  created () {
    this.appliedOffset = this.offset
    this.appliedLimit = this.limit
  },
  mounted () {
    this.fetchPokemons()
  },
  methods: {
    fetchAPI (endpoint) {
      return fetch(API_PATH + endpoint)
        .then(res => res.json())
    },
    fetchPokemons () {
      document.querySelector('.pokecards').classList.add('loading')
      this.pokemons = []
      this.fetchAPI(`/pokemon?offset=${this.appliedOffset}&limit=${this.appliedLimit}`)
        .then(res => {
          this.count = res.count
          return res
        })
        .then(res => res.results.map(pokemon => pokemon.url))
        .then(pokemons => {
          this.pokemons = pokemons
        })
      document.querySelector('.pokecards').classList.remove('loading')
    },
    startPage () {
      if (this.appliedOffset !== 0) {
        this.appliedOffset = 0
        this.fetchPokemons()
      }
    },
    nextPage () {
      if (this.appliedOffset < this.count) {
        this.appliedOffset += this.appliedLimit
        if (this.appliedOffset > this.count) this.appliedOffset = this.count
        this.fetchPokemons()
      }
    },
    previousPage () {
      if (this.appliedOffset > 0) {
        this.appliedOffset -= this.appliedLimit
        if (this.appliedOffset < 0) this.appliedOffset = 0
        this.fetchPokemons()
      }
    },
    finalPage () {
      if (this.appliedOffset !== (this.count - this.appliedLimit)) {
        this.appliedOffset = this.count - this.appliedLimit
        this.fetchPokemons()
      }
    },
    setNewActiveLimit (event) {
      if (!event.target.classList.contains('limit-active')) {
        this.appliedLimit = parseInt(event.target.textContent)
        document.querySelector('.limit-active').classList.remove('limit-active')
        event.target.classList.add('limit-active')
        this.fetchPokemons()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {

  .pagination-control {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 512px) {
      flex-direction: column-reverse;
    }

    .pagination-index {
      padding: 20px;
    }

    & > div:first-of-type {
      display: flex;
      align-items: center;

      @media screen and (max-width: 512px) {
        flex-direction: column;
      }
    }

    .pagination-arrows, .pagination-limit {
      padding: 0;
      margin: 20px 0;

      display: flex;
      list-style: none;

      & > button {
        padding: 7px 12px;
        border: 0;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.2) 0 1px 4px;
        color: #202020;
        font-size: 15px;
        text-align: center;
        cursor: pointer;

        margin: 0 2px;

        &:first-child {
          border-top-left-radius: 7px;
          border-bottom-left-radius: 7px;
          margin-left: 0;
        }

        &:last-child {
          border-top-right-radius: 7px;
          border-bottom-right-radius: 7px;
          margin-right: 0;
        }

        &:hover, &.limit-active {
          background-color: #205046;
          color: blanchedalmond;
        }
      }
    }
  }
}

.pokecards {
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  grid-gap: 2rem;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 512px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
