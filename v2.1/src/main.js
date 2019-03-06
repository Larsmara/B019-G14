import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import App from './App.vue'
import router from './router/router'
import {store} from './store/index'
import AlertCmp from '@/components/Shared/Alert.vue'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#008E76',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

Vue.component('app-alert', AlertCmp)

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
    // LOGGER EN BRUKER AUTOMATISK INN HVIS BRUKER HAR ET TOKEN LOKALT PÅ SIN MASKIN
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadProjects')
  }
}).$mount('#app')
