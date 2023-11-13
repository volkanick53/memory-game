<template>
  <h1>Memory Card Game </h1>
  
  <the-navigation></the-navigation>
  <div class="container">
    <div>
      <router-view></router-view>
    </div>
  </div>
  
</template>

<script>

export default {
  name: "App",
  components: {
    
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  
}

</style>
