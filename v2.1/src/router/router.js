import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About'
import Project from '../components/Project/Project.vue'
import CreateProject from '../components/Project/CreateProject.vue'
import ShowProject from '../components/Project/ShowProject.vue'
import Dashboard from '../components/Admin/Dashboard.vue'
import Profile from '../components/User/Profile.vue'
import Login from '../components/User/Login.vue'
import Register from '../components/User/Register.vue'

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
      path: '/prosjekter/ny',
      name: 'createProject',
      component: CreateProject
    },
    {
      path: '/prosjekter/:id',
      name: 'showProject',
      component: ShowProject
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/profil/:id',
      name: 'profile',
      component: Profile
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
