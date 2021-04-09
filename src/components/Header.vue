<template>
  <div class="header">
    <logo/>
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
  padding: 0 50px;

  color: #1D3557;
}
</style>
