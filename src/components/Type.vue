<template>
    <p class="type">{{ name }}</p>
</template>

<script>
export default {
  name: 'Type',
  props: {
    name: String
  },
  mounted () {
    this.$el.classList.add(this.name.toLowerCase())
  }
}
</script>

<style lang="scss">
  :root {
    --normal: rgb(170, 168, 189);
    --fire: rgb(235, 139, 61);
    --water: rgb(69, 168, 236);
    --grass: rgb(116, 201, 84);
    --electric: rgb(249, 210, 61);
    --ice: rgb(147, 226, 240);
    --fighting: rgb(154, 71, 63);
    --poison: rgb(160, 89, 176);
    --ground: rgb(199, 170, 98);
    --flying: rgb(147, 182, 243);
    --psychic: rgb(244, 118, 157);
    --bug: rgb(167, 182, 53);
    --rock: rgb(167, 133, 92);
    --ghost: rgb(124, 101, 173);
    --dark: rgb(93, 75, 75);
    --dragon: rgb(84, 88, 206);
    --steel: rgb(193, 183, 159);
    --fairy: rgb(248, 167, 238);
  }

  .type {
    text-transform: capitalize;
    padding: 2px 15px;
    font-size: 10px;
    border-radius: 17%;
    color: white;
  }

  .water {
    background-color: var(--water);
  }

  .fire {
    background-color: var(--fire);
  }

  .normal {
    background-color: var(--normal);
  }

  .grass {
    background-color: var(--grass);
  }

  .electric {
    background-color: var(--electric);
  }

  .ice {
    background-color: var(--ice);
  }

  .fighting {
    background-color: var(--fighting);
  }

  .poison {
    background-color: var(--poison);
  }

  .ground {
    background-color: var(--ground);
  }

  .flying {
    background-color: var(--flying);
  }

  .psychic {
    background-color: var(--psychic);
  }

  .bug {
    background-color: var(--bug);
  }

  .rock {
    background-color: var(--rock);
  }

  .ghost {
    background-color: var(--ghost);
  }

  .dark {
    background-color: var(--dark);
  }

  .dragon {
    background-color: var(--dragon);
  }

  .steel {
    background-color: var(--steel);
  }

  .fairy {
    background-color: var(--fairy);
  }
</style>
