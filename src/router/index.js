import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Story from '@/components/Story'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/story',
      name: 'Story',
      component: Story
    }
  ]
})
