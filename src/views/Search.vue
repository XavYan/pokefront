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
  </div>
</template>

<script>
export default {
  name: 'Search'
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
