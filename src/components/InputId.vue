<template>
  <div class="id-form">
    <label>{{ title }}</label>
    <input
      type="number"
      min="1"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'InputId',
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.id-form {
  display: flex;
  flex-direction: column;

  input {
    margin: 5px 10px 5px 0;
    padding: 4px;
  }
}
</style>
