import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router/router'
import {store} from './store/index'
import AlertCmp from './components/Shared/Alert.vue'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#065591',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

Vue.component('app-alert', AlertCmp)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
