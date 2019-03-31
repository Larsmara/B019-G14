import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import moment from 'moment'

Vue.use(Vuex)
moment.locale('nb')

export default{
  state: {
    loading: false,
    error: null
  },
  mutations: {
    setLoading(state, payload){
      state.loading = payload
    },
    setError(state, payload){
      state.error = payload
    },
    clearError(state){
      state.error = null
    }
  },
  actions: {
    // OPPDTATERER PROSJEKTET TIL INTERNT
    updateToInternt({commit}, payload){
      commit('setLoading', true)
      commit('clearError')
      const updateObj = {}

      if(!payload.internt){
        updateObj.internt = true
      }
      firebase.firestore().collection('projects').doc(payload.id).update({
        updateObj
      }).then(() => {
        console.log('Oppdatert til INTERNT')
        commit('setLoading', false)
        commit('updateToInternt', payload)
        window.location.reload()
      }).catch(error => {
        console.log(error)
      })
    },
    // FJERNER FEILMELDINGER HOS BRUKER
    clearError({commit}){
      commit('clearError')
    }
  },
  getters: {
    adminProject(state){
      return state.loadedProjects.filter(project => project.internt === false && project.eksternt === false && project.utvalgt === false)
    },
    interneProsjekter(state){
      return state.loadedProjects.filter(project => project.internt)
    },
    eksterneProsjekter(state){
      return state.loadedProjects.filter(project => project.eksternt)
    },
    utvalgteProsjekter(state){
      return state.loadedProjects.filter(project => project.utvalgt)
    },
    brukerProsjekter(state){
      return state.loadedProjects.filter(project => project.creatorId === state.user[0].userId)
    },
    loading(state){
      return state.loading
    },
    error(state){
      return state.error
    }
  }
}
