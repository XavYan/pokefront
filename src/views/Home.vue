<template>
  <div class="home">
    <div class="body">
      <h1>Welcome to PokéFront!</h1>
      <p>
        This website interacs with <a
          href="https://pokeapi.co"
          target="_blank"
        >PokéAPI</a> to provide information about Pokémons and the world around them!
      </p><p>
        You have all pokémons provided by this API below, sorted by IDs. To look for a
        specific pokémon, please refer to
        <router-link to="/search">
          Search
        </router-link> page.
      </p><p>
        Thanks for using and <i>gotta catch 'em all!</i>
      </p>
      <h2>Pokédex</h2>
      <poke-pagination
        :list="pokemons"
        :offset="0"
        :limit="20"
      />
    </div>
  </div>
</template>

<script>
import PokePagination from '../components/PokePagination.vue'

const API_PATH = 'https://pokeapi.co/api/v2'

export default {
  name: 'Home',
  components: {
    PokePagination
  },
  data () {
    return {
      pokemons: []
    }
  },
  created () {
    this.fetchPokemons()
  },
  methods: {
    fetchAPI (endpoint) {
      return fetch(API_PATH + endpoint)
        .then(res => res.json())
    },
    fetchPokemons () {
      this.pokemons = []
      this.fetchAPI('/pokedex/national')
        .then(res => {
          this.pokemons = res.pokemon_entries.map(entry => {
            return {
              url: API_PATH + '/pokemon/' + entry.entry_number,
              name: entry.pokemon_species.name,
              id: entry.entry_number
            }
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  padding: 0 50px 50px 50px;
  display: flex;
  flex-direction: column;

  & > h2 {
    align-self: flex-start;
    text-transform: uppercase;
    margin-bottom: 0;

    @media screen and (max-width: 512px) {
      align-self: center;
    }
  }

  a {
    text-decoration: none;
    color: var(--secondary-color);
    font-style: italic;
    margin-left: 3px;
    margin-right: 5px;

    &:hover {
      border-bottom: 2px solid var(--secondary-color);
    }
  }
}
</style>
