import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guards'
import Hjem from '../views/Home'
import About from '../views/About.vue'
import Prosjekt from '../views/Prosjekt/Prosjekt.vue'
import UtvalgteProsjekter from '../components/Prosjekt/ProsjektUtv.vue'
import SeProsjekt from '../components/Prosjekt/SeProsjekt.vue'
import NyIdé from '../components/Prosjekt/NyttProsjekt'

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
    },
    {
      path: '/prosjekter/utvalgte',
      name: 'utvalgte',
      component: UtvalgteProsjekter
    },
    {
      path: '/ny-idé',
      name: 'createProject',
      component: NyIdé,
      beforeEnter: AuthGuard
    },
    {
      path: '/prosjekt/:id',
      name: 'SeProsjekt',
      props: true,
      component: SeProsjekt
    }
  ]
})
