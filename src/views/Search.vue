<template>
  <div class="search">
    <h1>This is a search pokemon page</h1>
    <p>
      Unfortunatelly, this page is not opened yet. It is beeing developed currently,
      and will be realeased soon.
    </p>
    <p>
      We're sorry for the inconvenience. Please, don't hate us :'(
    </p>
    <h2>Filters</h2>
    <div class="filters">
      This is the filter zone.. empty yet.
    </div>
    <h2>Results</h2>
    <poke-pagination />
  </div>
</template>

<script>
import PokePagination from '../components/PokePagination.vue'
export default {
  name: 'Search',
  components: { PokePagination }
}
</script>

<style lang="scss" scoped>
.search {
  padding: 0 50px 50px 50px;
  display: flex;
  flex-direction: column;
}

@keyframes beating {
  0% {
    transform: scale(0.8);
  }
  100% {
    transition: scale(1);
  }
}
</style>
