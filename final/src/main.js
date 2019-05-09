import Vue from 'vue'
import App from './App.vue'
import '@/firebase'
import router from './router/router'
import store from './store/index'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style/style.css'

import './auth'
import 'moment'
import moment from 'moment';
import VueBootstrapToasts from 'vue-bootstrap-toasts'


moment.locale('nb')

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueBootstrapToasts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
