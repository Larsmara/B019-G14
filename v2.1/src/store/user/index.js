import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import moment from 'moment'

Vue.use(Vuex)
moment.locale('nb')

export default{
  state: {
    loadedUser: [],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
    setLoadedUser(state, payload){
      state.loadedUser = payload
    },
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
    // REGISTRERER EN NY BRUKER
    signUserUp({commit, getters}, payload){
      commit('setLoading', true)
      commit('clearError')
      
      firebase.firestore().collection('users').doc(payload.user.phone).get()
      .then(doc => {
        if(doc.exists){
          let error = {message: 'Mobilnummber finnes'}
          commit('setError', error)
        } else {
          firebase.auth().createUserWithEmailAndPassword(payload.email, payload.passord)
          .then((user) => {
            firebase.firestore().collection('users').doc(payload.user.phone).set({
              email: payload.user.email,
              name: payload.user.name,
              slug: payload.user.slug,
              phone: payload.user.phone,
              isAdmin: false,
              joined: payload.user.joined,
              userId: user.user.uid
            })
            firebase.auth().currentUser.updateProfile({
              displayName: payload.user.phone
            }).then(() => {
              console.log('oppdatert bruker')
            }).catch((error) => {
              console.log(error)
            })
            commit('setLoading', false)
            const newUser = {
              id: user.uid
            }
            commit('setUser', newUser)
          }).catch((error) => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          })
        }
      })
    },
    // LOGGER BRUKER INN
    signUserIn({commit}, payload){
      commit('setLoading', true)
      commit('clearError')
      
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid
        }
        commit('setUser', newUser)
      }).catch((error) => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      })
    },
    loadUser({commit}, payload){

    },
    // Henter bruker fra DB
    fetchUserData({commit}){
      commit('setLoading', true)
      let userData = []

      firebase.firestore().collection('users')
      .where('userId', '==', firebase.auth().currentUser.uid).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
              let docs = doc.data()
              console.log(moment(docs.joined))
              userData.push({
                  email: doc.data().email,
                  name: docs.name,
                  phone: docs.phone,
                  admin: docs.isAdmin,
                  joined: moment(docs.joined),
                  slug: docs.slug,
                  userId: docs.userId
                })  
            })
        })
        commit('setLoading', false)
        commit('setUser', userData)
    },
    // METODE FOR Å AUTOMATISK LOGGE EN BRUKER INN
    autoSignIn({commit}, payload){
      commit('setUser', {id: payload.uid})
    },
    // Logger ut bruker
    logout({commit}){
      firebase.auth().signOut()
      commit('setUser', null)
    },
    // FJERNER FEILMELDINGER HOS BRUKER
    clearError({commit}){
      commit('clearError')
    }
  },
  getters: {
    loadedUser(state){
      return state.loadedUser   
    },
    user(state){
      return state.user
    },
    loading(state){
      return state.loading
    },
    error(state){
      return state.error
    }
  }
}
