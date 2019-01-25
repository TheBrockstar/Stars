<template>
  <div class="contact">
    <h1>Ground Control to Major Tom...
      <br/><br/>
      {{ greeting }}
      <br/><br/>
      <a href="mailto:BrockMRohloff@gmail.com">{{ tagline }}</a>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Story',
  data () {
    return {
      greeting: 'You can reach me at:  ',
      tagline: 'BrockMRohloff@gmail.com'
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

a
  color: #fc0;

li
  display: inline-block;
  margin: 0 10px;

.contact
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

</style>
