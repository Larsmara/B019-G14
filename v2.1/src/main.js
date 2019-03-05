import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router/router'
import {store} from './store/index'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
