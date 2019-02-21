<template>
  <div class="welcome">
    <!-- <h1>Welcome! <br/><br/>{{ greeting }}<br/><br/>{{ tagline }}</h1> -->
    <div class="rocketship">
      <div class="nose"></div>
      <div class="fuselage"></div>
      <div class="fins"></div>
    </div>
    <div class="container">
    <h1>{{ greetings[Math.floor(Math.random() * greetings.length)] }}</h1>
    <h1>I'm Brock, a <span class="sun">Fullstack Web Developer</span></h1>
    <h1>Thanks for visiting my little corner of the internet— </h1>
    <h1>Take a look at the links in the <span class="sun">sun</span> above to see more!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      greetings: ['Hello!', 'Welcome!', 'Greetings!']
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

h1, h2
  font-weight: bold;
  max-width: 600px;
  text-align: left;
  line-height: 1.5 em;
  margin-bottom: 20px;

ul
  list-style-type: none;
  padding: 0;

li
  display: inline-block;
  margin: 0 10px;

a
  color: #42b983;

span.sun
  color: #FC0;

.welcome
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .container
    width: 45%;
    margin-top: 10%;

.rocketship
  z-index: 9999;
  display: flex;
  margin-top: 1800px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: scale(1, 1)
  animation-delay: 1s;
  animation: fly-in 6s;
  width: 48%;

  .nose
    height: 900px;
    width: 600px;
    background-color: lightgrey;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-top: 60px solid #2E353C;
    padding-top: 150px;
    margin-bottom: -5px;
    &:after // Porthole
      display: inline-block;
      height: 375px;
      width: 375px;
      border-radius: 50%;
      background-image: url("../assets/me.jpg");
      background-size: cover;
      background-color: black;
      border: 45px solid #2E353C;
      content: "";

  .fuselage
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 1200px;
    width: 600px;
    background-color: lightgrey;
    border-bottom-right-radius: 25%;
    border-bottom-left-radius: 25%;

    &:after // Engine Glow
      position: relative;
      bottom: -240px;
      content: "";
      display: inline-block;
      height: 450px;
      width: 300px;
      background: radial-gradient(60% 480px at 50% top, #FC0, rgba(0, 0, 0, 0));
      z-index: -1;
      animation: engine-pulse .1s infinite;

  .fins
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 150%;
    top: -450px;

    &:before // Left Fin
      content: "";
      display: inline-block;
      height: 300px;
      width: 450px;
      background-color: #2E353C;
      transform: rotate(310deg) skew(-40deg, 0deg);
      border-top-left-radius: 30%;
      border-bottom-left-radius: 5%;
      border-bottom: 30px solid lightgrey;
      z-index: -1;

    &:after // Right Fin
      content: "";
      display: inline-block;
      height: 300px;
      width: 450px;
      background-color: #2E353C;
      transform: rotate(50deg) skew(40deg, 0deg);
      border-top-right-radius: 30%;
      border-bottom-right-radius: 5%;
      border-bottom: 30px solid lightgrey;
      z-index: -1;

  @keyframes engine-pulse
    0%
      background: radial-gradient(60% 480px at 50% top, #FC0, rgba(0, 0, 0, 0));
    50%
      background: radial-gradient(60% 465px at 50% top, #FC0, rgba(0, 0, 0, 0));
    100%
      background: radial-gradient(60% 480px at 50% top, #FC0, rgba(0, 0, 0, 0));

  @keyframes fly-in
    0%
      translate3d(0,0,0)
      transform: scale(.15, .15)
      margin-top: 100%;
    50%
      transform: scale(.15, .15)
      margin-top: 0%;
    100%
      margin-top: 1800px;
      transform: scale(1, 1)

</style>
