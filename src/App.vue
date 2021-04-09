<template>
  <div id="app">
    <Header/>
    <div class="body">
      <h2>Filters</h2>
      <div class="id-forms">
        <input-id v-model.number="tempInitialId" title="Initial shown ID"/>
        <input-id v-model.number="tempFinalId" title="Last shown ID"/>
        <button type="button" @click="reloadWithNewIds">Apply</button>
      </div>
      <h1>Pokémon List</h1>
      <p>{{ initialId }} - {{ finalId }}</p>
      <div class="pokecarts">
        <poke-cart v-for="(pokemon, index) in pokemons" :key="index" :id="pokemon.id" :name="pokemon.name" :types="pokemon.types" :image="pokemon.image"/>
      </div>
    </div>
    <Footer/>
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
    reloadWithNewIds () {
      let changed = false

      if (this.tempFinalId && this.finalId !== this.tempFinalId) {
        this.finalId = this.tempFinalId
        changed = true
      }

      if (this.tempInitialId && this.initialId !== this.tempInitialId) {
        this.initialId = this.tempInitialId
        changed = true
      }

      if (changed) this.loadPokeCarts()
    }
  },
  created () {
    this.loadPokeCarts()
    this.tempInitialId = this.initialId
    this.tempFinalId = this.finalId
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400&display=swap');

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
  }
}

.id-forms {
  padding: 20px 0 20px 0;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
}

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

.pokecarts {
  // display: flex;
  // justify-content: space-between;
  // flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
