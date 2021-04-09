<template>
  <div id="app">
    <Header/>
    <div class="body">
      <h1>Pokémon List</h1>
      <div class="id-forms">
        <div class="fid-form">
          <label for="initialId">Initial shown ID</label>
          <input type="number" id="initialId">
        </div>
        <div class="fid-form">
          <label for="finalId">Last shown ID</label>
          <input type="number" id="finalId">
        </div>
        <button type="button" @click="reloadWithNewIds">Apply</button>
      </div>
      <p>{{ initialId }} - {{ finalId }}</p>
      <div class="pokecarts">
        <poke-cart v-for="(pokemon, index) in pokemons" :key="index" :id="pokemon.id" :name="pokemon.name" :types="pokemon.types" :image="pokemon.image"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import PokeCart from './components/PokeCart.vue'

const API_PATH = 'https://pokeapi.co/api/v2/'

export default {
  name: 'App',
  components: {
    Header,
    PokeCart
  },
  data () {
    return {
      initialId: 1,
      finalId: 50,
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
      const fid = document.querySelector('#finalId').value
      const iid = document.querySelector('#initialId').value

      let changed = false

      if (fid && this.finalId !== fid) {
        this.finalId = fid
        changed = true
      }

      if (iid && this.initialId !== iid) {
        this.initialId = iid
        changed = true
      }

      if (changed) this.loadPokeCarts()
    }
  },
  created () {
    this.loadPokeCarts()
  },
  mounted () {
    document.querySelector('#initialId').value = this.initialId
    document.querySelector('#finalId').value = this.finalId
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
  padding-bottom: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.body {
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  align-self: flex-start;
  text-transform: uppercase;
  margin-bottom: 0;
}

.id-forms {
  padding: 20px 0 20px 0;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
}

.fid-form {
  display: flex;
  flex-direction: column;
}

.fid-form input {
  margin: 5px 10px 5px 0;
  padding: 4px;
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
