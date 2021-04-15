<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400&display=swap');

:root {
  --sm: 512px;
  --md: 768px;
  --lg: 1024px;

  --main-color: #264653;
  --secondary-color: #F4A261;

  --all: #6d6875;
  --normal: rgb(170, 168, 189);
  --fire: rgb(235, 139, 61);
  --water: rgb(69, 168, 236);
  --grass: rgb(116, 201, 84);
  --electric: rgb(249, 210, 61);
  --ice: rgb(147, 226, 240);
  --fighting: rgb(154, 71, 63);
  --poison: rgb(160, 89, 176);
  --ground: rgb(199, 170, 98);
  --flying: rgb(147, 182, 243);
  --psychic: rgb(244, 118, 157);
  --bug: rgb(167, 182, 53);
  --rock: rgb(167, 133, 92);
  --ghost: rgb(124, 101, 173);
  --dark: rgb(93, 75, 75);
  --dragon: rgb(84, 88, 206);
  --steel: rgb(193, 183, 159);
  --fairy: rgb(248, 167, 238);
}

#app {
  margin: auto;
  max-width: 1200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

body {
  margin: 0;
  background-color: #F8EDEB;

  font-family: 'Noto Sans TC', sans-serif;
}

.loading::before {
  content: '';
  width: 50px;
  height: 50px;
  border: 8px solid #EDF6F9;
  border-radius: 50%;
  border-left-color: #83C5BE;

  animation: spin .6s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
