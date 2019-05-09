import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guards'
import Hjem from '../views/Home'
import About from '../views/About.vue'
import Prosjekt from '../views/Prosjekt/Prosjekt.vue'
import MinSide from '../views/Bruker/MinSide.vue'
/* ADMIN */
import Dashbord from '../views/Admin/Dashbord.vue'
import AdminHjem from '../components/Admin/Hjem.vue'
import AdminInterne from '../components/Admin/Interne.vue'
import AdminEksterne from '../components/Admin/Eksterne.vue'
import AdminProduksjon from '../components/Admin/Produksjon.vue'
import AdminUtvalgte from '../components/Admin/Utvalgte.vue'
import AdminBrukere from '../components/Admin/Brukere.vue'
import AdminSkole from '../components/Admin/Skole.vue'
import AdminTeknisk from '../components/Admin/Teknisk.vue'
import AdminHelse from '../components/Admin/Helse.vue'
import AdminSynlig from '../components/Admin/Synlige.vue'

import UtvalgteProsjekter from '../components/Prosjekt/ProsjektUtv.vue'
import SeProsjekt from '../components/Prosjekt/SeProsjekt.vue'
import NyIdé from '../components/Prosjekt/NyttProsjekt'

/* AUTH - Routeguards. Check if user is logged in and check if user is admin */
import firebase from '@/firebase'
import { mapActions, mapState } from 'vuex'

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
      beforeEnter(to, from, next){
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
        .then(doc => {
          if(doc.exists){
            next()
          } else {
            next('/')
          }
        })
      },
    },
    {
      path: '/prosjekt/:id',
      name: 'SeProsjekt',
      props: true,
      component: SeProsjekt
    },
    {
      path: '/profil/:id',
      name: 'profil',
      props: true,
      component: MinSide,
      beforeEnter(to, from, next){
        const docId = firebase.auth().currentUser
        firebase.firestore().collection('users').doc(docId.uid).get()
        .then(doc => {
          if(doc.exists){
            next()
          } else {
            next('/')
          }
        })
      },
    },
    {
      path: '/admin/dashbord',
      name: 'dashbord',
      props: true,
      component: Dashbord,
      beforeEnter(to, from, next){
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
        .then(doc => {
          if(doc.data().isAdmin === true){
            next()
          } else {
            next('/')
          }
        })
      },
      children: [{
        path: 'hjem',
        name: 'dashHjem',
        component: AdminHjem
      }, {
        path: 'interne',
        name: 'interne',
        component: AdminInterne
      },
      {
        path: 'eksterne',
        name: 'eksterne',
        component: AdminEksterne
      },
      {
        path: 'produksjon',
        name: 'produksjon',
        component: AdminProduksjon
      },
      {
        path: 'utvalgte',
        name: 'dashUtvalgte',
        component: AdminUtvalgte
      },
      {
        path: 'skole',
        name: 'dashSkole',
        component: AdminSkole
      },
      {
        path: 'teknisk',
        name: 'dashTeknisk',
        component: AdminTeknisk
      },
      {
        path: 'helse',
        name: 'dashHelse',
        component: AdminHelse
      },
      {
        path: 'synlige',
        name: 'dashSynlige',
        component: AdminSynlig
      },
      {
        path: 'brukere',
        name: 'brukere',
        component: AdminBrukere
      }]
    },
  ]
})
