<template>
  <div class="id-form">
    <label>{{ title }}</label>
    <input type="number" min="1" @input="$emit('input', $event.target.value)" :value="value">
  </div>
</template>

<script>
export default {
  name: 'InputId',
  props: {
    title: String,
    value: Number
  }
}
</script>

<style lang="scss">
.id-form {
  display: flex;
  flex-direction: column;

  input {
    margin: 5px 10px 5px 0;
    padding: 4px;
  }
}
</style>
