<template>
  <div class="search">
    <h1>This is a search pokemon page</h1>
    <p>
      Unfortunatelly, this page is not opened yet. It is beeing developed currently,
      and will be realeased soon.
    </p>
    <p>
      We're sorry for the inconvenience. Please, don't hate us :'(
    </p>
    <h2>Filters</h2>
    <div class="filters">
      <form>
        <div class="pokedex-group">
          <label for="pokedex-select" />
          <select
            id="pokedex-select"
            v-model="pokedex"
            @change="fetchPokemons()"
          />
        </div>
      </form>
    </div>
    <h2>Results</h2>
    <poke-pagination :list="pokemons" />
  </div>
</template>

<script>
import PokePagination from '../components/PokePagination.vue'

const API_PATH = 'https://pokeapi.co/api/v2'

export default {
  name: 'Search',
  components: { PokePagination },
  data () {
    return {
      pokedex: 'national',
      pokemons: []
    }
  },
  created () {
    this.loadPokedexSelect()
    this.fetchPokemons()
  },
  methods: {
    fetchAPI (endpoint) {
      return fetch(`${API_PATH}${endpoint}`)
        .then(res => res.json())
    },
    fetchPokemons () {
      console.log(`calling fetchPokemons with ${this.pokedex}!`)
      this.fetchAPI(`/pokedex/${this.pokedex.toLowerCase()}`)
        .then(pokedex => {
          this.pokemons = pokedex.pokemon_entries.map(entry => {
            const url = new URL(entry.pokemon_species.url)
            const urlParts = url.pathname.replaceAll('/', ' ').trim().split(' ')
            const originalId = urlParts[urlParts.length - 1]
            return {
              url: `${API_PATH}/pokemon/${originalId}`,
              id: entry.entry_number,
              index: parseInt(originalId),
              name: entry.pokemon_species.name
            }
          })
        })
    },
    formatString (str) {
      return str.replace('-', ' ')
    },
    loadPokedexSelect () {
      this.fetchAPI('/pokedex/?limit=30')
        .then(res => {
          res.results.forEach(pokedex => {
            document.querySelector('#pokedex-select').innerHTML += `
              <option value="${pokedex.name}">${this.formatString(pokedex.name)}</option>
            `
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  padding: 0 50px 50px 50px;
  display: flex;
  flex-direction: column;
}

@keyframes beating {
  0% {
    transform: scale(0.8);
  }
  100% {
    transition: scale(1);
  }
}
</style>
