<template>
  <p class="type">
    {{ name }}
  </p>
</template>

<script>
export default {
  name: 'PokeType',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.$el.classList.add(this.name.toLowerCase())
  }
}
</script>

<style lang="scss" scoped>
.type {
  text-transform: capitalize;
  padding: 2px 15px;
  font-size: 10px;
  border-radius: 10px;
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
