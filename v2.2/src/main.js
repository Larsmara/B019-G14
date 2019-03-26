import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router/router'
import {store} from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style/style.css'
import LoginComp from './components/Bruker/LoginComp.vue'
import dialog from './components/Bruker/Dialog.vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.component('app-login', LoginComp)
Vue.component('app-dialog', dialog)

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyCQSTFAbaVWVBwe8oUeuWPFQ9EmV1pF_0E",
      authDomain: "bachelor-824d5.firebaseapp.com",
      databaseURL: "https://bachelor-824d5.firebaseio.com",
      projectId: "bachelor-824d5",
      storageBucket: "bachelor-824d5.appspot.com",
      messagingSenderId: "896918903719"
    })
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
