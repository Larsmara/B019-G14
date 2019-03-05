import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Project from '../components/Project/Project.vue'
import ProjectShow from '../components/Project/ProjectShow.vue'
import NewProject from '../components/Project/NewProject.vue'
import Profile from '../components/User/Profile.vue'
import Signin from '../components/User/Signin.vue'
import Register from '../components/User/Register.vue'
import Dashboard from '../components/Admin/Dashboard.vue'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/om-oss',
      name: 'About',
      component: About
    },
    {
      path: '/prosjekter',
      name: 'Project',
      component: Project
    },
    {
      path: '/prosjekter/:id',
      name: 'ProjectShow',
      component: ProjectShow
    },
    {
      path: '/prosjekter/ny',
      name: 'NewProject',
      component: NewProject
    },
    {
      path: '/login',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profil/:id',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
