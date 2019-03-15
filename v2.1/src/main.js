import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import App from './App.vue'
import router from './router/router'
import {store} from './store/index'
import AlertCmp from '@/components/Shared/Alert.vue'
import SuccessCmp from '@/components/Shared/Success.vue'
import EditUser from '@/components/User/edit/EditUser'
import LoginComp from '@/components/User/LoginComp'
import RegisterComp from '@/components/User/RegisterComp'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#2196f3',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

Vue.component('app-alert', AlertCmp)
Vue.component('app-success', SuccessCmp)
Vue.component('app-login-user', LoginComp)
Vue.component('app-register-user', RegisterComp)
Vue.component('app-edit-user', EditUser)

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
        this.$store.dispatch('fetchUserData')
      } else {
        console.log('Bruker er ikke deffinert')
      }
    })
    this.$store.dispatch('loadProjects')
  }
}).$mount('#app')
