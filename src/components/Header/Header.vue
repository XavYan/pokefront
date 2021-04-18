<template>
  <div
    role="header"
    class="header"
  >
    <router-link
      class="logo-container"
      to="/"
    >
      <pokefront-logo />
    </router-link>
    <div id="nav">
      <conditional-router-link
        v-for="(link, index) in links"
        :key="index"
        :to="link.path"
        :enabled="link.name !== 'Home'"
      >
        {{ link.name }}
      </conditional-router-link>
    </div>
  </div>
</template>

<script>
import ConditionalRouterLink from '../ConditionalRouterLink.vue'
import PokefrontLogo from '../PokefrontLogo/PokefrontLogo.vue'
import { routes } from '../../router'

export default {
  name: 'Header',
  components: {
    PokefrontLogo,
    ConditionalRouterLink
  },
  data () {
    return {
      links: [...routes].sort((a, b) => a.order < b.order ? -1 : 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #264653;
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 0 50px;

  color: #1D3557;

  @media screen and (max-width: 512px) {
    flex-direction: column;
  }

  .logo-container {
    text-decoration: none;

    @media screen and (max-width: 512px) {
      padding: 10px 0;
    }
  }

  #nav {
    width: 100%;
    margin-left: 50px;

    @media screen and (max-width: 512px) {
      display: flex;
      width: auto;
      margin: 0;
      padding-bottom: 15px;
      justify-content: center;
      flex-direction: column;
    }

    :nth-child(n) {
      color: white;
      text-decoration: none;
      padding: 0 10px;
      height: 100%;
      font-size: 20px;
      margin: 0 3px;
      text-align: center;

      @media screen and (max-width: 512px) {
        margin: 3px 0;
      }

      &:first-child {
        margin-left: 0;

        @media screen and (max-width: 512px) {
          margin-top: 0;
        }
      }

      &:last-child {
        margin-right: 0;

        @media screen and (max-width: 512px) {
          margin-bottom: 0;
        }
      }

      &:hover, &.router-link-active {
        color: #F4A261;
        // border-bottom: 2px solid #F4A261;
      }
    }
  }
}
</style>
