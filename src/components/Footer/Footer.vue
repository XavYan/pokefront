<template>
  <div
    role="footer"
    class="footer"
  >
    <p>Himar Manuel Barquín Carrasco - A Junior FullStack Web Developer</p>
    <p>Copyright &copy;2021</p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #264653;
  color: white;
  min-height: 50px;
  padding: 0 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    & > p:first-child {
      margin-bottom: 0;
    }
    & > p:last-child {
      margin-top: 0;
    }
  }
}
</style>
