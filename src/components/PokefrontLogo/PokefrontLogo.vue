<template>
  <p
    role="logo"
    class="title"
  >
    <i>Poké</i><span>Front</span>
  </p>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
.title {
  margin: 0;
  font-size: 25px;
  font-weight: 400;

  i {
    margin-right: 3px;
    color: white;
  }

  span {
    color: #F4A261;
  }
}
</style>
