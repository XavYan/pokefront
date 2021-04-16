<template>
  <div
    :id="`pokemon${id}`"
    class="container"
  >
    <div
      v-if="types && image"
    >
      <poke-card-id :id="id" />
      <poke-card-name :name="appliedName" />
      <poke-card-image
        :image="image"
        :alt="`${appliedName} image`"
      />
      <poke-card-types :types="types" />
    </div>
  </div>
</template>

<script>
import PokeCardId from './PokeCardId.vue'
import PokeCardImage from './PokeCardImage.vue'
import PokeCardName from './PokeCardName.vue'
import PokeCardTypes from './PokeCardTypes.vue'

export default {
  name: 'PokeCard',
  components: {
    PokeCardName,
    PokeCardId,
    PokeCardImage,
    PokeCardTypes
  },
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
      types: [],
      isUnkown: false
    }
  },
  async mounted () {
    try {
      document.querySelector(`#pokemon${this.id}`).classList.add('loading')
      const data = await this.fetchUrl()
      this.appliedName = this.name !== '' ? this.name : data.name
      this.image = data.sprites.front_default
      this.types = data.types.map(slot => slot.type.name)
      document.querySelector(`#pokemon${this.id}`).classList.remove('loading')
    } catch (error) {
      this.appliedName = '????'
      this.image = require('../../assets/yamask_hidden.png')
      this.types = ['??', '??']
    }
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

  .pokemon-types {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
</style>
