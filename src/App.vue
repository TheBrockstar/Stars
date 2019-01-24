<template>
  <div id="app">
    <div id="bmr-container">
      <img src="./assets/great5.png">
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
@import url('https://fonts.googleapis.com/css?family=Poiret+One');
@font-face {
  font-family: 'Bahnschrift';
  src: url('./assets/bahnschrift/bahnschrift.eot'); /* IE9 Compat Modes */
  src: url('./assets/bahnschrift/bahnschrift.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/bahnschrift/bahnschrift.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/bahnschrift/bahnschrift.woff') format('woff'), /* Pretty Modern Browsers */
       url('./assets/bahnschrift/bahnschrift.ttf')  format('truetype'), /* Safari, Android, iOS */
}
html, body, #app {
  height: 100%;
}

body {
  background-color: #8ED4DA;
  padding: 0;
  margin: 0;
}

img {
  height: 100%;
}

a {
  text-decoration: none;
  color: rgb(66, 66, 66);
  font-weight: bold;
}

#app {
  font-family: 'Bahnschrift', 'Poiret One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;
}

#bmr-container {
  height: 89px;
  width: 94%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  word-spacing: 15px;
  background-color: salmon;
  padding: 13px 3%;
  border-bottom: 3px solid #4b7072;
	-webkit-box-shadow: 0 5px 0px rgba(66, 66, 66, .5);
	-moz-box-shadow: 0 5px 0px rgba(66, 66, 66, .5);
	box-shadow: 0 5px 0px rgba(66, 66, 66, .5);
}

</style>
