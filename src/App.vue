<template>
  <div id="app">
    <div id="bmr-container">
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
@import url('https://fonts.googleapis.com/css?family=Poiret+One');
@font-face {
  font-family: 'Bahnschrift';
  src: url('./assets/bahnschrift/bahnschrift.eot'); /* IE9 Compat Modes */
  src: url('./assets/bahnschrift/bahnschrift.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./assets/bahnschrift/bahnschrift.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/bahnschrift/bahnschrift.woff') format('woff'), /* Pretty Modern Browsers */
       url('./assets/bahnschrift/bahnschrift.ttf')  format('truetype'), /* Safari, Android, iOS */
}

* {
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
}

body {
  background-color: rgb(0, 0, 102);
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
  color: whitesmoke;
  margin-top: 0px;
  height: 100%;
}

#bmr-container {
  height: 99px;
  width: 110%;
  position: fixed;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  word-spacing: 15px;
  background-color: #fc0;
  padding: 13px 8% 23px 8%;
  box-shadow: 0 20px 0 rgba(255,204,6,.5), 0 10px 0 rgba(255,204,6,.25);
  z-index: 9999;
  border-bottom-left-radius: 70%30px;
  border-bottom-right-radius: 70%40px;
  margin: 0px -5%;
  animation: sun-glow ease-in 2s infinite;
  transition: border-bottom-left-radius .5s, border-bottom-right-radius .5s, padding .5s, height .5s;
}

#bmr-container:hover {
  height: 89px;
  padding: 13px 8% 13px 8%;
  border-bottom-left-radius: 70%0px;
  border-bottom-right-radius: 70%0px;
  margin: 0px -5%;
}

#app::before {
  box-sizing: border-box;
  height: 99px;
  width: 110%;
  position: fixed;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  word-spacing: 15px;
  background-color: transparent;
  padding: 13px 8% 23px 8%;
  box-shadow: 0 20px 0 rgba(255,204,6,.5), 0 5px 0 rgba(255,204,6,.25);
  z-index: 9998;
  border-bottom-left-radius: 70%30px;
  border-bottom-right-radius: 70%40px;
  margin: 0px -5%;
  animation-delay: 1s;
  animation: sun-glow 2s infinite;
  content: ""
}

.navigation a:hover {
  text-decoration: underline
}

@keyframes sun-glow {
  0% {
    box-shadow: 0 0px 0 rgba(255,204,6,.5), 0 5px 0 rgba(255,204,6,.25);
  }

  100% {
    box-shadow: 0 20px 0 rgba(255,204,6,0), 0 5px 0 rgba(255,204,6,.25);
  }
}

</style>
