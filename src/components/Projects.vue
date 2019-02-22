<template>
  <div class="story">
    <h1>
      {{ greeting }} <a href="https://github.com/TheBrockstar">{{ tagline }}</a>
    </h1>
    <article class="projects">
      <section class="project"
      v-bind:class="{ flip: project1 }"
      v-on:click="project1 = !project1">
        <h1>
          Mappa Job
        </h1>
        <div class="project-pic" >
          <img src="../assets/mappajob.png"/>
        </div>
        <div class="description" >
          <ul>
            <li>
              <a href="https://www.mappajob.com/">https://www.mappajob.com/</a>
            </li>
            <li>
              <a href="https://github.com/Lambda-School-Labs/Labs8-DeveloperMap">GitHub Repo</a>
            </li>
            <li>Collaborated within a team of four developers to develop a single page web app
              that provides a map of developers and the companies that are looking to hire them.
            </li>
            <li>Designed and developed the front end using HTML, CSS, and Javascript implemented
              via React, specifically using styled components, react router, react router transitions,
              and a react mapbox module.
            </li>
            <li> Configured and Implemented Firebase Authentication with three methods of
              authentication (gmail, github, and email/password), and two user types.
            </li>
            <li>Constructed a RESTful API in Javascript using Node and Express with HTTP endpoints
              that handled one to one communication between our client and our Firebase NoSQL Database.
            </li>
            <li>Implemented a firebase realtime database to handle live updates to the map, users, job
              postings, and more. Used redundancy to speed up queries.
            </li>
          </ul>
        </div>
      </section>
      <section class="project"
      v-bind:class="{ flip: project2 }"
      v-on:click="project2 = !project2">
        <h1>
          Lambda Notes
        </h1>
        <div class="project-pic">
          <img src="../assets/lambdanotes.png"/>
        </div>
        <div class="description" >
          <ul>
            <li>
              <a href="https://lambdanotes.codingwild.com/">https://lambdanotes.codingwild.com/</a>
            </li>
            <li>
              GitHub:
              <a href="https://github.com/TheBrockstar/Lambda-Notes-Front-End">Front End </a>
              <a href="https://github.com/TheBrockstar/Lambda-Notes-Back-End">Back End</a>
            </li>
            <li>Designed and developed a simple single page note board application using Javascript,
              CSS, and HTML that allows users to create and manage notes through Redux managed state.
            </li>
            <li>Constructed a RESTful API in Javascript using Node and Express with HTTP endpoints
              allowing clients to create, modify, and delete notes stored in the connected database.
            </li>
            <li> Seeded, and created the initial migration for, a PostgreSQL database and deployed it
              on Heroku.
            </li>
            <li>Next Steps: Save the size and position of notes that have been dragged/resized. Add
              tablet and mobile media queries and refactor drag and drop to handle touch events.
            </li>
          </ul>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Story',
  data () {
    return {
      greeting: 'Check out more at: ',
      tagline: ' https://github.com/TheBrockstar',
      project1: false,
      project2: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

h1, h2
  font-weight: bold;

ul
  list-style-type: circle;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;

li
  display: inline-block;
  margin: 20px 10px;

a
  margin-left: 5px;
  color: #fc0;
  &:hover
    text-decoration: underline;

.project.flip
  .project-pic
    display: none;

  .description
    display: block;

.project
  padding-bottom: 20px;
  width: 30%;
  border-bottom: 10px double white;
  border-top: 10px double white;
  border-radius: 25px;
  box-shadow: 0 2px 2px 0 rgba(255, 255, 255, 0.6);
  background-color: rgba(255,255,255,.1);
  transition: background-color .2s ease, color .2s ease, height .5s;
  color: white;

  .description
    display: none;

  &:hover
    cursor: pointer;
    background-color: rgba(255,255,255,.2);
    h1
      text-decoration: underline;
      color: #FC0;

  img
    width: 90%;
    border-radius: 25px;

.projects
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

.story
  padding-top: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

</style>
