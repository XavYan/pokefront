<template>
  <div class="header">
    <p class="title"><i>Poké</i><span>Front</span></p>
    <!-- <font-awesome-icon class="menu-icon" :icon="['fas', 'chevron-circle-down']" /> -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .header {
    background-color: #264653;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;

    color: #1D3557;

    .menu-icon {
      font-size: 30px;
    }

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
  }
</style>
