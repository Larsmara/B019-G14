import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About'
import Project from '../components/Project/Project.vue'
import CreateProject from '../components/Project/CreateProject.vue'
import ShowProject from '../components/Project/ShowProject.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../components/User/Profile.vue'
import Login from '../components/User/Login.vue'
import Register from '../components/User/Register.vue'
import Interne from '../components/Admin/Interne.vue'
import Eksterne from '../components/Admin/Eksterne'
import AdminHome from '../components/Admin/Home.vue'
import AuthGuard from './auth-guards'
import firebase from 'firebase'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/om-oss',
      name: 'about',
      component: About
    },
    {
      path: '/prosjekter',
      name: 'prosjekter',
      component: Project
    },
    {
      path: '/ny-idé',
      name: 'createProject',
      component: CreateProject,
      beforeEnter: AuthGuard
    },
    {
      path: '/prosjekt/:id',
      name: 'ShowProject',
      props: true,
      component: ShowProject
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter(to, from, next){
        firebase.firestore().collection('users').where('isAdmin', '==', true).get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            if(doc.data().isAdmin == true){
              next()
            } else {
              next('/login')
            }
          })
        })
      },
      children: [{
        path: 'home',
        name: 'Home',
        component: AdminHome
      },{
        path: 'interne',
        name: 'Interne',
        component: Interne
      }, {
        path: 'eksterne',
        name: 'Eksterne',
        component: Eksterne
      }]
    },
    {
      path: '/profil/:id',
      name: 'profile',
      component: Profile,
      props: true,
      beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
