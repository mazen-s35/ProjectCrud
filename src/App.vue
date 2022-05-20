<template>
  <div id="content">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:wght@200;300;500&family=Poppins:wght@400;500;600;700&family=Roboto:wght@100;300;500&family=Rubik:wght@400;500&family=Ubuntu:wght@300&display=swap");

body {
  font-family: "Ubuntu", sans-serif;
  background-color: #f0fdf0;
}

h1 {
  color: #222;
}
</style>
