<template>
  <div class="welcome">
    <h1>Until the Stardust Clears...
      <br/><br/>
      {{ greeting }}
      <br/><br/>
      <a href="https://github.com/TheBrockstar">{{ tagline }}</a>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Story',
  data () {
    return {
      greeting: 'You can check out some of my work at:',
      tagline: 'https://github.com/TheBrockstar'
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
  color: #fc0;

.welcome
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

</style>
