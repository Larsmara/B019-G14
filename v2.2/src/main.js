import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router/router'
import {store} from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import LoginComp from './components/Bruker/LoginComp.vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.component('app-login', LoginComp)

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
    this.$store.dispatch('loadProjects')

  }
}).$mount('#app')
