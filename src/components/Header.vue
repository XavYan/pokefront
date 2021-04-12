<template>
  <div class="header">
    <router-link
      class="logo-container"
      to="/"
    >
      <pokefront-logo />
    </router-link>
    <div id="nav">
      <router-link
        to="/search"
        active-class="nav-active"
      >
        Search
      </router-link>
      <router-link
        to="/about"
        active-class="nav-active"
      >
        About
      </router-link>
    </div>
  </div>
</template>

<script>
import PokefrontLogo from './PokefrontLogo.vue'

export default {
  name: 'Header',
  components: { PokefrontLogo }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #264653;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 50px;

  color: #1D3557;

  .logo-container {
    text-decoration: none;
  }

  #nav {
    width: 100%;
    margin-left: 50px;

    :nth-child(n) {
      color: white;
      text-decoration: none;
      padding: 0 10px;
      height: 100%;
      font-size: 20px;
      margin: 0 3px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      &:hover, &.nav-active {
        color: #F4A261;
        // border-bottom: 2px solid #F4A261;
      }
    }
  }
}
</style>
