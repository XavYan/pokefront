<template>
  <div id="app">
    <div class="pokecarts">
      <poke-cart v-for="(pokemon, index) in pokemons" :key="index" :id="pokemon.id" :name="pokemon.name" :types="pokemon.types" :image="pokemon.image"/>
    </div>
  </div>
</template>

<script>
import PokeCart from './components/PokeCart.vue'

const API_PATH = 'https://pokeapi.co/api/v2/'
const FINAL_ID = 50

export default {
  name: 'App',
  components: {
    PokeCart
  },
  data () {
    return {
      pokemons: []
    }
  },
  methods: {
    fetchAPI (endpoint) {
      console.log('Going to ' + API_PATH + endpoint)
      return fetch(API_PATH + endpoint + '/')
        .then(res => res.json())
    },
    async loadPokeCarts () {
      for (let id = 1; id <= FINAL_ID; id++) {
        const data = await this.fetchAPI('pokemon/' + id)
        this.pokemons.push({
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          types: data.types.map(slot => slot.type.name)
        })
      }
      console.log(this.pokemons)
    }
  },
  created () {
    this.loadPokeCarts()
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: auto;
}

.pokecarts {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
