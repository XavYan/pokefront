<template>
  <div
    :id="`pokemon${id}`"
    class="container"
  >
    <div
      v-if="types && image"
    >
      <strong class="pokemon-id">#{{ id }}</strong>
      <h2 class="pokemon-name">
        {{ appliedName }}
      </h2>
      <img
        v-if="image"
        class="pokemon-image"
        :src="image"
        alt="pokemon image"
      >
      <div
        v-if="types"
        class="pokemon-types"
      >
        <poke-type
          v-for="(type, index) in types"
          :key="index"
          :name="type"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PokeType from './PokeType/PokeType.vue'

export default {
  name: 'PokeCard',
  components: { PokeType },
  props: {
    id: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      image: '',
      appliedName: '',
      types: []
    }
  },
  async mounted () {
    document.querySelector(`#pokemon${this.id}`).classList.add('loading')
    const data = await this.fetchUrl()
    this.appliedName = this.name !== '' ? this.name : data.name
    this.image = data.sprites.front_default
    this.types = data.types.map(slot => slot.type.name)
    document.querySelector(`#pokemon${this.id}`).classList.remove('loading')
  },
  methods: {
    fetchUrl () {
      return fetch(this.src)
        .then(res => res.json())
    }
  }
}
</script>

<style lang="scss" scoped>
  .container, .container > div {
    background-color: white;

    border-radius: 5%;
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
    width: 220px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    transition: all .1s linear;
    cursor: pointer;

    align-self: center;
  }

  .container:hover {
    transform: translateY(-10px);
  }

  .pokemon-id {
    color: #B7B7A4;
    width: 100%;
    padding-left: 30px;
    padding-top: 5px;
    font-size: 10px;
  }

  .pokemon-name {
    margin-top: 0;
    font-weight: 400;
    text-transform: capitalize;
  }

  .pokemon-image {
    width: 150px;
    height: 150px;
  }

  .pokemon-types {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
</style>
