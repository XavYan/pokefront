<template>
  <img
    v-if="image"
    class="pokemon-image"
    :src="image"
    :alt="alt"
  >
</template>

<script>
export default {
  name: 'PokeCardImage',
  props: {
    image: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'pokemon image'
    }
  }
}
</script>

<style lang="scss" scoped>
.pokemon-image {
  width: 150px;
  height: 150px;
}
</style>
