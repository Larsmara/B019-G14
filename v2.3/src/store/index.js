import Vue from 'vue';
import Vuex from 'vuex';

/* FIREBASE / FIRESTORE */
import auth from './auth'
import { vuexfireMutations } from 'vuexfire'
import users from './users'

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {
    ...vuexfireMutations
  },
  modules: {
    auth,
    users
  },
});
