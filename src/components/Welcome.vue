<template>
  <div class="welcome">
    <h1>Welcome! <br/><br/>{{ greeting }}<br/><br/>{{ tagline }}</h1>
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

</style>
