<template>
  <div id="app">
    <Header />
    <div class="body">
      <h2>Filters</h2>
      <div class="filters">
        <div class="filter ids">
          <p>IDs</p>
          <form class="id-forms">
            <input-id
              v-model.number="tempInitialId"
              title="Initial shown ID"
            />
            <input-id
              v-model.number="tempFinalId"
              title="Last shown ID"
            />
            <button
              type="submit"
              @click="reloadWithNewIds($event)"
            >
              Apply
            </button>
          </form>
        </div>
      </div>
      <h1>Pokémon List</h1>
      <p>{{ initialId }} - {{ finalId }}</p>
      <div class="pokecarts">
        <poke-cart
          v-for="(pokemon, index) in pokemons"
          :id="pokemon.id"
          :key="index"
          :name="pokemon.name"
          :types="pokemon.types"
          :image="pokemon.image"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import InputId from './components/InputId.vue'
import PokeCart from './components/PokeCart.vue'

const API_PATH = 'https://pokeapi.co/api/v2/'

export default {
  name: 'App',
  components: {
    Header,
    PokeCart,
    InputId,
    Footer
  },
  data () {
    return {
      initialId: 1,
      finalId: 50,
      tempInitialId: 0,
      tempFinalId: 0,
      pokemons: []
    }
  },
  created () {
    this.loadPokeCarts()
    this.tempInitialId = this.initialId
    this.tempFinalId = this.finalId
  },
  methods: {
    fetchAPI (endpoint) {
      return fetch(API_PATH + endpoint + '/')
        .then(res => res.json())
    },
    async loadPokeCarts () {
      this.pokemons = []
      for (let id = this.initialId; id <= this.finalId; id++) {
        const data = await this.fetchAPI('pokemon/' + id)
        this.pokemons.push({
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          types: data.types.map(slot => slot.type.name)
        })
      }
    },
    reloadWithNewIds (event) {
      event.preventDefault()

      let changed = false

      if (this.tempInitialId && this.tempInitialId > 0 && this.initialId !== this.tempInitialId) {
        this.initialId = this.tempInitialId
        if (this.initialId > this.tempFinalId) {
          this.finalId = this.initialId
          this.tempFinalId = this.initialId
        }
        changed = true
      }

      if (this.tempFinalId && this.tempFinalId > 0 && this.finalId !== this.tempFinalId) {
        this.finalId = this.initialId > this.tempFinalId ? this.initialId : this.tempFinalId
        this.tempFinalId = this.finalId
        changed = true
      }

      if (changed) this.loadPokeCarts()
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
  align-items: center;

  & > h1, & > h2 {
    align-self: flex-start;
    text-transform: uppercase;
    margin-bottom: 0;

    @media screen and (max-width: 512px) {
      align-self: center;
    }
  }
}

.filters {
  align-self: flex-start;
  display: flex;

  @media screen and (max-width: 512px) {
    flex-direction: column;
  }

  .filter {
    min-height: 300px;
    margin: 10px;
    padding: 5px 30px 20px 30px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  .id-forms {
    padding: 20px 0;
    align-self: flex-start;
    display: flex;
    flex-direction: column;

    button {
      margin-top: 5px;
      padding: 4px 12px;
      font-size: 14px;
      width: 75px;
      background-color: rgb(23, 162, 184);
      border: 1px solid rgb(23, 162, 184);
      border-radius: 4px;
      color: white;
      cursor: pointer;
    }
  }
}

.pokecarts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

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
