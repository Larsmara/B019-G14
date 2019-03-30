import Vue from 'vue'
import App from './App.vue'
import '@/firebase'
import * as firebase from 'firebase'
import router from './router/router'
import {store} from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style/style.css'
import dialog from './components/Bruker/Dialog.vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.component('app-dialog', dialog)

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){       
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      } else {
        console.log('Bruker er ikke deffinert')
      }
    })
    this.$store.dispatch('loadProjects')

  }
}).$mount('#app')
