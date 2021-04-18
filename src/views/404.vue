<template>
  <div>
    <h1>Not found</h1>
    <p>Sorry, the path what you're looking for doesn't exists.</p>
    <br>
    <router-link
      class="btn"
      to="/"
    >
      Return to Home page
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage404'
}
</script>

<style lang="scss" scoped>
  div {
    padding: 0 50px 50px 50px;
  }

  .btn {
    padding: 13px 23px;
    background-color: transparent;
    border: 2px solid #F4A261;
    color: #F4A261;
    font-weight: bold;
    font-size: 15px;
    border-radius: 10px;
    text-decoration: none;

    &:hover {
      background-color: #F4A261;
      color: white;
      cursor: pointer;
    }
  }
</style>
