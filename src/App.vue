<template>
  <div id="app">
    <div id="bmr-container">
      <div class="bmr-name">Brock Maraee Rohloff</div>
      <img src="./assets/logo-grey.png">
      <div class="navigation">
        <a href="#">Story</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: #8ED4DA;
  padding: 25px 5%;
}

img {
  height: 100%;
}

a {
  text-decoration: none;
  color: #424242;
  font-weight: bold;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

#bmr-container {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  word-spacing: 15px;
}

</style>
