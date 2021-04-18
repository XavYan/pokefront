<template>
  <router-link
    v-if="enabled"
    :to="to"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'ConditionalRouterLink',
  props: {
    to: {
      type: String,
      required: true
    },
    enabled: {
      type: Boolean,
      default: true
    }
  }
}
</script>
