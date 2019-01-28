<template>
  <div id="app">
    <div id="bmr-container">
      <router-link to="/" class="logo"><img src="./assets/logo-grey.png"></router-link>
      <div class="navigation">
        <router-link to="/story">Story</router-link>
        <router-link to="/projects">Projects</router-link >
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <div class='stars' id='dwarf-stars'></div>
    <div class='stars' id='giant-stars'></div>
    <div class='stars' id='supergiant-stars'></div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import (css) url('https://fonts.googleapis.com/css?family=Poiret+One');
@font-face {
  font-family: 'Bahnschrift';
  src: url('./assets/bahnschrift/bahnschrift.eot'); /* IE9 Compat Modes */
  src: url('./assets/bahnschrift/bahnschrift.eot?#iefix') format('embedded-opentype'); /* IE6-IE8 */
  src: url('./assets/bahnschrift/bahnschrift.woff2') format('woff2'); /* Super Modern Browsers */
  src: url('./assets/bahnschrift/bahnschrift.woff') format('woff'); /* Pretty Modern Browsers */
  src: url('./assets/bahnschrift/bahnschrift.ttf')  format('truetype'); /* Safari, Android, iOS */
}

* {
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  overflow: hidden;
}

body {
  background-color: rgb(0, 0, 102);
  background: radial-gradient( 75% 145px at 50% top, #FC0, rgba(0, 0, 102, 0) ),
  radial-gradient( 150% 120px at 50% bottom, #0b0b21  0%, #040448 33%, #000066 100%);
  padding: 0;
  margin: 0;
}

.logo, img {
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

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity, transform;
  transition-timing-function: ease;
  overflow: none;
  .stars {
    width: 20px;
  }
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translate(50%, 0);
  overflow: none;
}

@media only screen and (max-width: 600px) {

  body {
    background: radial-gradient(150% 170px at 50% top, #FC0, rgba(0, 0, 102, 0) ),
    radial-gradient( 150% 110px at 50% bottom, #0b0b21  0%, #040448 33%, #000066 100%);
  }

  #app h1 {
    font-size: 25px;
  }

  #bmr-container {
    height: 125px;
    padding: 13px 8% 45px 8%;
    flex-direction: column;
  }

  #bmr-container:hover {
  height: 110px;
  padding: 13px 8% 30px 8%;
  border-bottom-left-radius: 70%0px;
  border-bottom-right-radius: 70%0px;
  margin: 0px -5%;
}
}

</style>

<!-- Star Field -->

<style lang="sass" scoped>

.star
  position: absolute;
  top: 50%;
  left: 25%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: whitesmoke;

@function safe-unquote ($param)
  @return if(type-of($param) == string, unquote($param), $param)

@function multiple-box-shadow ($stars)
  $bxshadow: ()
  @for $i from 1 to $stars
    $bxshadow: append($bxshadow, (random(2000) + 0px) (random(2000) + 0px) #fff, comma)
  @return safe-unquote($bxshadow);

$dwarf-shadows: multiple-box-shadow(500)
$giant-shadows: multiple-box-shadow(200)
$supergiant-shadows: multiple-box-shadow(100)

html
  overflow: hidden

.stars
  position: absolute;
  top: 0%
  left: 0%
  border-radius: 50%
  background: transparent

#dwarf-stars
  width: 1px
  height: 1px
  box-shadow: $dwarf-shadows
  animation: dwarf-blink 3s infinite

#giant-stars
  width: 2px
  height: 2px
  box-shadow: $giant-shadows
  animation: giant-blink 5s infinite

#supergiant-stars
  width: 3px
  height: 3px
  box-shadow: $supergiant-shadows
  animation: supergiant-blink 8s infinite

@keyframes supergiant-blink
  0%
    box-shadow: $supergiant-shadows;
  21%
    $colors: '#fff', 'transparent';
    $stars: $supergiant-shadows;
    @for $i from 1 to length($stars) / 2
      $star: set-nth(nth($stars, $i * 2), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, $i * 2, $star)
    box-shadow: $stars;
  54%
    $colors: '#fff', 'transparent';
    $stars: $supergiant-shadows;
    @for $i from 1 to length($stars)
      $star: set-nth(nth($stars, $i), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, $i, $star)
    box-shadow: $stars;
  87%
    $colors: '#fff', 'transparent';
    $stars: $supergiant-shadows;
    @for $i from 1 to length($stars) / 2
      $star: set-nth(nth($stars, ($i * 2) - 1), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, ($i * 2) - 1, $star)
    box-shadow: $stars;
  100%
    box-shadow: $supergiant-shadows;

@keyframes giant-blink
  0%
    box-shadow: $giant-shadows;
  21%
    $colors: '#fff', 'transparent';
    $stars: $giant-shadows;
    @for $i from 1 to length($stars) / 2
      $star: set-nth(nth($stars, $i * 2), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, $i * 2, $star)
    box-shadow: $stars;
  54%
    $colors: '#fff', 'transparent';
    $stars: $giant-shadows;
    @for $i from 1 to length($stars)
      $star: set-nth(nth($stars, $i), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, $i, $star)
    box-shadow: $stars;
  87%
    $colors: '#fff', 'transparent';
    $stars: $giant-shadows;
    @for $i from 1 to length($stars) / 2
      $star: set-nth(nth($stars, ($i * 2) - 1), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, ($i * 2) - 1, $star)
    box-shadow: $stars;
  100%
    box-shadow: $giant-shadows;

@keyframes dwarf-blink
  0%
    box-shadow: $dwarf-shadows;
  21%
    $colors: '#fff', 'transparent';
    $stars: $dwarf-shadows;
    @for $i from 1 to length($stars) / 2
      $star: set-nth(nth($stars, $i * 2), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, $i * 2, $star)
    box-shadow: $stars;
  54%
    $colors: '#fff', 'transparent';
    $stars: $dwarf-shadows;
    @for $i from 1 to length($stars)
      $star: set-nth(nth($stars, $i), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, $i, $star)
    box-shadow: $stars;
  87%
    $colors: '#fff', 'transparent';
    $stars: $dwarf-shadows;
    @for $i from 1 to length($stars) / 2
      $star: set-nth(nth($stars, ($i * 2) - 1), 3, safe-unquote(nth($colors, random(length($colors)))))
      $stars: set-nth($stars, ($i * 2) - 1, $star)
    box-shadow: $stars;
  100%
    box-shadow: $dwarf-shadows;
</style>
