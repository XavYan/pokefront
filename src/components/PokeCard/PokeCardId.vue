<template>
  <strong class="pokemon-id">#{{ id }}</strong>
</template>

<script>
export default {
  name: 'PokeCardId',
  props: {
    id: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.pokemon-id {
  color: #B7B7A4;
  width: 100%;
  padding-left: 30px;
  padding-top: 5px;
  font-size: 10px;
}
</style>
