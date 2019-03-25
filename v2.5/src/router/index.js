import Vue from 'vue'
import Router from 'vue-router'
import Hjem from '../views/Hjem'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'hjem',
      component: Hjem
    }
  ]
})
