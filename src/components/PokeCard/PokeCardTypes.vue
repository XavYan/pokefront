<template>
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
</template>

<script>
import PokeType from '../PokeType/PokeType.vue'

export default {
  name: 'PokeCardTypes',
  components: {
    PokeType
  },
  props: {
    types: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
