<template>
  <div class="welcome">
    <!-- <h1>Welcome! <br/><br/>{{ greeting }}<br/><br/>{{ tagline }}</h1> -->
    <div class="rocketship">
      <div class="nose">
        <p>C.S.S. Brocketship</p>
      </div>
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
  // margin-top: 150px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .container
    width: 45%;
    margin-top: 10%;
    @media screen and (max-width: 800px)
      margin-top: 15%;
      font-size: 13px;
    @media screen and (max-width: 700px)
      margin-top: 5%;
      width: 80%;
    @media screen and (max-height: 650px)
      margin-top: 15%;
      font-size: 13px;

.rocketship
  z-index: 9998;
  display: flex;
  margin-top: 1800px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: scale(6.66, 6.66);
  animation-delay: 1s;
  animation: fly-in-bottom-big 6s;
  width: 48%;
  @media screen and (max-width: 1200px)
    margin-top: 1200px;
    transform: scale(5, 5);
  @media screen and (max-width: 1000px)
    transform: rotatez(90deg) scale(3.5, 3.5);
    margin-top: 900px;
    transform: scale(3.5, 3.5);
  @media screen and (max-width: 700px)
    transform: rotatez(90deg) scale(3.5, 3.5);
    margin-Left: -70vw;
    margin-top: -50px;
  @media screen and (max-height: 800px)
    margin-top: 1400px;
    transform: scale(5, 5);
    animation: fly-in-bottom-med 6s;
  @media screen and (max-height: 650px)
    margin-top: 1000px;
    transform: scale(3.5, 3.5);
    animation: fly-in-bottom-sml 6s;

  .nose
    height: 135px;
    width: 90px;
    background-color: lightgrey;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-top: 9px solid #2E353C;
    padding-top: 22.5px;
    margin-bottom: -5px;
    p
      position: relative;
      font-size: 4px;
      color: #2E353C;
      top: -18px;
      left: -42px;
      transform: rotatez(90deg);
    &:before // Porthole
      display: inline-block;
      height: 56.25px;
      width: 56.25px;
      border-radius: 50%;
      background-image: url("../assets/me.jpg");
      background-size: cover;
      background-color: black;
      border: 6.75px solid #2E353C;
      content: "";

  .fuselage
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 180px;
    width: 90px;
    background-color: lightgrey;
    border-bottom-right-radius: 25%;
    border-bottom-left-radius: 25%;

    &:after // Engine Glow
      position: relative;
      bottom: -36px;
      content: "";
      display: inline-block;
      height: 67.5px;
      width: 45px;
      background: radial-gradient(60% 72px at 50% top, #FC0, rgba(0, 0, 0, 0));
      z-index: -1;
      animation: engine-pulse .1s infinite;

  .fins
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 22.5%;
    top: -67.5px;
    @media screen and (max-height: 650px)
      width: 30%;

    &:before // Left Fin
      content: "";
      display: inline-block;
      height: 45px;
      width: 67.5px;
      background-color: #2E353C;
      transform: rotate(310deg) skew(-40deg, 0deg);
      border-top-left-radius: 30%;
      border-bottom-left-radius: 5%;
      border-bottom: 4.5px solid lightgrey;
      z-index: -1;

    &:after // Right Fin
      content: "";
      display: inline-block;
      height: 45px;
      width: 67.5px;
      background-color: #2E353C;
      transform: rotate(50deg) skew(40deg, 0deg);
      border-top-right-radius: 30%;
      border-bottom-right-radius: 5%;
      border-bottom: 4.5px solid lightgrey;
      z-index: -1;

  @keyframes engine-pulse
    0%
      background: radial-gradient(60% 72px at 50% top, #FC0, rgba(0, 0, 0, 0));
    50%
      background: radial-gradient(60% 70px at 50% top, #FC0, rgba(0, 0, 0, 0));
    100%
      background: radial-gradient(60% 72px at 50% top, #FC0, rgba(0, 0, 0, 0));

  @keyframes fly-in
    0%
      translate3d(0,0,0)
      transform: scale(1, 1)
      margin-top: 100%;
    50%
      transform: scale(1, 1)
      margin-top: 0%;
    100%
      margin-top: 1800px;
      transform: scale(6.66, 6.66)

  @keyframes fly-in-bottom-big
    0%
      translate3d(0,0,0)
      transform: scale(1, 1)
      margin-top: 100%;
    50%
      transform: scale(1, 1)
      margin-top: 0%;
    100%
      margin-top: 1800px;
      transform: scale(6.66, 6.66)

  @keyframes fly-in-bottom-med
    0%
      translate3d(0,0,0)
      transform: scale(1, 1)
      margin-top: 100%;
    50%
      transform: scale(1, 1)
      margin-top: 0%;
    100%
      margin-top: 1400px;
      transform: scale(5, 5)

  @keyframes fly-in-bottom-sml
    0%
      translate3d(0,0,0)
      transform: scale(1, 1)
      margin-top: 100%;
    50%
      transform: scale(1, 1)
      margin-top: 0%;
    100%
      margin-top: 1000px;
      transform: scale(3.5, 3.5)

</style>
