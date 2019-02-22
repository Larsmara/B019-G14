import Vue            from 'vue'
import Router         from 'vue-router'
import Index          from '@/components/home/Index'
import Project        from '@/components/project/Project'
import NewProject     from '@/components/project/NewProject'
import About          from '@/components/home/About'
import Login          from '@/components/auth/Login'
import Register       from '@/components/auth/Register'
import UserProfile    from '@/components/user/UserProfile'
import firebase       from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/new',
      name: 'NewProject',
      component: NewProject,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile/:id',
      name: 'UserProfile',
      component: UserProfile,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to,from,next) => {
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    let user = firebase.auth().currentUser
    if(user){
      // User signed in, proceed to route
      next()
    } else {
      next({name: 'Login'})
    }
  } else {
    next()
  }
})


export default router