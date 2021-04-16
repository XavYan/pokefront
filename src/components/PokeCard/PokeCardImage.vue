<template>
  <img
    v-if="image"
    class="pokemon-image"
    :src="image"
    alt="pokemon image"
  >
</template>

<script>
export default {
  name: 'PokeCardImage',
  props: {
    image: {
      type: String,
      required: true
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
