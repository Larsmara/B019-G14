import Vue from 'vue'
import Router from 'vue-router'
import Hjem from '../views/Home'
import About from '../views/About.vue'
import Prosjekt from '../views/Prosjekt/Prosjekt.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'hjem',
      component: Hjem
    },
    {
      path: '/om-oss',
      name: 'about',
      component: About
    },
    {
      path: '/prosjekter',
      name: 'prosjekter',
      component: Prosjekt
    }
  ]
})
