<template>
  <div class="welcome">
    <!-- <h1>Welcome! <br/><br/>{{ greeting }}<br/><br/>{{ tagline }}</h1> -->
    <div class="rocketship">
      <div class="nose"></div>
      <div class="fuselage"></div>
      <div class="fins"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      greeting: 'Pardon the Stardust... ',
      tagline: 'My Portfolio is Under Construction'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

h1, h2
  font-weight: bold;

ul
  list-style-type: none;
  padding: 0;

li
  display: inline-block;
  margin: 0 10px;

a
  color: #42b983;

.welcome
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

.rocketship
  margin-top: 150px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .nose
    height: 300px;
    width: 200px;
    background-color: lightgrey;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-top: 20px solid slategrey;
    padding-top: 50px;
    &:after // Porthole
      display: inline-block;
      height: 125px;
      width: 125px;
      border-radius: 50%;
      background-color: black;
      border: 15px solid slategrey;
      content: "";

  .fuselage
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 400px;
    width: 200px;
    background-color: lightgrey;
    border-bottom-right-radius: 25%;
    border-bottom-left-radius: 25%;

    &:after // Engine Glow
      position: relative;
      bottom: -80px;
      content: "";
      display: inline-block;
      height: 150px;
      width: 100px;
      background: radial-gradient(60% 160px at 50% top, #FC0, rgba(0, 0, 0, 0));
      z-index: -1;
      animation: engine-pulse .1s infinite;

  .fins
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 150%;
    top: -150px;

    &:before // Left Fin
      content: "";
      display: inline-block;
      height: 100px;
      width: 150px;
      background-color: slategrey;
      transform: rotate(310deg) skew(-40deg, 0deg);
      border-top-left-radius: 30%;
      border-bottom-left-radius: 5%;
      border-bottom: 10px solid lightgrey;
      z-index: -1;

    &:after // Right Fin
      content: "";
      display: inline-block;
      height: 100px;
      width: 150px;
      background-color: slategrey;
      transform: rotate(50deg) skew(40deg, 0deg);
      border-top-right-radius: 30%;
      border-bottom-right-radius: 5%;
      border-bottom: 10px solid lightgrey;
      z-index: -1;

  @keyframes engine-pulse
    0%
      background: radial-gradient(60% 160px at 50% top, #FC0, rgba(0, 0, 0, 0));
    50%
      background: radial-gradient(60% 155px at 50% top, #FC0, rgba(0, 0, 0, 0));
    100%
      background: radial-gradient(60% 160px at 50% top, #FC0, rgba(0, 0, 0, 0));

</style>
