<template>
  <h2 class="pokemon-name">
    {{ name }}
  </h2>
</template>

<script>
export default {
  name: 'PokeCardName',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.pokemon-name {
  margin-top: 0;
  font-weight: 400;
  text-transform: capitalize;
}
</style>
