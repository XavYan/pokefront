<template>
    <div class="container">
      <strong class="pokemon-id">#{{ id }}</strong>
      <h2 class="pokemon-name">{{ name }}</h2>
      <img class="pokemon-image" :src="image" alt="pokemon image">
      <div class="pokemon-types">
        <type v-for="(type, index) in types" :key="index" :name="type"/>
      </div>
    </div>
</template>

<script>
import Type from './Type.vue'

export default {
  components: { Type },
  name: 'PokeCart',
  props: {
    id: Number,
    name: String,
    image: String,
    types: Array
  }
}
</script>

<style lang="scss">
  .container {
    background-color: white;

    border-radius: 5%;
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
    width: 220px;
    height: 300px;
    margin: 10px 20px 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    transition: all .1s linear;
    cursor: pointer;
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
