<template>
  <div class="header">
    <logo/>
    <!-- <font-awesome-icon class="menu-icon" :icon="['fas', 'chevron-circle-down']" /> -->
  </div>
</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'Header',
  components: { Logo }
}
</script>

<style lang="scss">
  .header {
    background-color: #264653;
    height: 50px;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    padding: 0 50px;

    color: #1D3557;

    .menu-icon {
      font-size: 30px;
    }
  }
</style>
