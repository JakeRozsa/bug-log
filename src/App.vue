<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><i class="fas fa-home"></i></router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('getBugs')
    }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    position: fixed;
    left: 50px;
    top: 5px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .fas {
    text-shadow: 0px 0px 5px black;
    font-size: 30px;
  }
</style>