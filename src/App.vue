<template>
  <div id="app">
    <Header />
    <div class="body">
      <h1>Pokédex</h1>
      <div class="pagination">
        <div class="pagination-control">
          <div>
            <div class="pagination-arrows">
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
            </div>
            <div class="pagination-index">
              {{ offset + 1 }} - {{ offset + limit }}
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
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import PokeCard from './components/PokeCard.vue'

const API_PATH = 'https://pokeapi.co/api/v2'

export default {
  name: 'App',
  components: {
    Header,
    PokeCard,
    Footer
  },
  data () {
    return {
      pokemons: [],
      count: 1118,
      offset: 0,
      limit: 20
    }
  },
  mounted () {
    this.fetchPokemons(this.offset, this.limit)
  },
  methods: {
    fetchAPI (endpoint) {
      return fetch(API_PATH + endpoint)
        .then(res => res.json())
    },
    fetchPokemons (offset, limit) {
      document.querySelector('.pokecards').classList.add('loading')
      this.pokemons = []
      this.fetchAPI(`/pokemon?offset=${offset}&limit=${limit}`)
        .then(res => res.results.map(pokemon => pokemon.url))
        .then(pokemons => {
          this.pokemons = pokemons
        })
      document.querySelector('.pokecards').classList.remove('loading')
    },
    nextPage () {
      if (this.offset < this.count) {
        this.offset += this.limit
        this.fetchPokemons(this.offset, this.limit)
      }
    },
    previousPage () {
      if (this.offset > 0) {
        this.offset -= this.limit
        this.fetchPokemons(this.offset, this.limit)
      }
    },
    setNewActiveLimit (event) {
      if (!event.target.classList.contains('limit-active')) {
        this.limit = parseInt(event.target.textContent)
        document.querySelector('.limit-active').classList.remove('limit-active')
        event.target.classList.add('limit-active')
        this.fetchPokemons(this.offset, this.limit)
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400&display=swap');

:root {
  --sm: 512px;
  --md: 768px;
  --lg: 1024px;

  --all: #6d6875;
  --normal: rgb(170, 168, 189);
  --fire: rgb(235, 139, 61);
  --water: rgb(69, 168, 236);
  --grass: rgb(116, 201, 84);
  --electric: rgb(249, 210, 61);
  --ice: rgb(147, 226, 240);
  --fighting: rgb(154, 71, 63);
  --poison: rgb(160, 89, 176);
  --ground: rgb(199, 170, 98);
  --flying: rgb(147, 182, 243);
  --psychic: rgb(244, 118, 157);
  --bug: rgb(167, 182, 53);
  --rock: rgb(167, 133, 92);
  --ghost: rgb(124, 101, 173);
  --dark: rgb(93, 75, 75);
  --dragon: rgb(84, 88, 206);
  --steel: rgb(193, 183, 159);
  --fairy: rgb(248, 167, 238);
}

body {
  margin: 0;
  background-color: #F8EDEB;

  font-family: 'Noto Sans TC', sans-serif;
}

#app {
  margin: auto;
  max-width: 1200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.body {
  padding: 0 50px 50px 50px;
  display: flex;
  flex-direction: column;

  & > h1, & > h2 {
    align-self: flex-start;
    text-transform: uppercase;
    margin-bottom: 0;

    @media screen and (max-width: 512px) {
      align-self: center;
    }
  }
}

.pagination {

  .pagination-control {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .pagination-index {
      padding: 20px;
    }

    div:first-of-type {
      display: flex;
      align-items: center;
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

.loading::before {
  content: '';
  width: 50px;
  height: 50px;
  border: 8px solid #EDF6F9;
  border-radius: 50%;
  border-left-color: #83C5BE;

  animation: spin .6s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
