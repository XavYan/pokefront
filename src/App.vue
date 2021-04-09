<template>
  <div id="app">
    <h1>Pokémon List</h1>
    <div class="fid-form">
      <label for="fid">Último ID mostrado</label>
      <input v-model="finalId">
    </div>
    <div class="pokecarts">
      <poke-cart v-for="(pokemon, index) in pokemons" :key="index" :id="pokemon.id" :name="pokemon.name" :types="pokemon.types" :image="pokemon.image"/>
    </div>
  </div>
</template>

<script>
import PokeCart from './components/PokeCart.vue'

const API_PATH = 'https://pokeapi.co/api/v2/'

export default {
  name: 'App',
  components: {
    PokeCart
  },
  data () {
    return {
      finalId: 50,
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
      for (let id = 1; id <= this.finalId; id++) {
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
  watch: {
    finalId () {
      document.querySelector('.pokecarts').innerHTML = ''
      this.loadPokeCarts()
    }
  },
  created () {
    this.loadPokeCarts()
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400&display=swap');

body {
  margin: 0;
  background-color: #14213D;

  font-family: 'Noto Sans TC', sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: 0 50px;
  margin: auto;
  background-color: white;
  padding-bottom: 50px;
}

h1 {
  align-self: flex-start;
  text-transform: uppercase;
  margin-bottom: 0;
}

.fid-form {
  align-self: flex-start;
  padding: 20px 0 20px 0;
}

.fid-form label {
  margin-right: 10px;
  font-size: 80%;
}

.pokecarts {
  display: flex;
  flex-wrap: wrap;
}
</style>
