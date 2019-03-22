import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import moment from 'moment'
import { stat } from 'fs';

Vue.use(Vuex)
moment.locale('nb')

export const store = new Vuex.Store({
  state: {
    loadedProjects: [],
    interneProsjekter: [],
    loadedUser: [],
    user: null,
    loading: false,
    error: null,
    success: null
  },
  mutations: {
    setLoadedProjects(state, payload){
      state.loadedProjects = payload
    },
    setInterneProsjekter(state, payload){
      state.interneProsjekter = payload
    },
    setUser(state, payload){
      state.user = payload
    },
    updateUser(state, payload){
      const user = state.user.find(user => {
        return user.userId === payload.userId
      })
      if(payload.email){
        user.email = payload.email
      }
      if(payload.phone){
        user.phone = payload.phone
      }
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
    setSuccess(state, payload){
      state.success = payload
    },
    clearError(state){
      state.error = null
    },
    clearSuccess(state, payload){
      state.success = null
    }
  },
  actions: {
    // HENTER PROSJEKTER FRA DATABASEN
    loadProjects({commit}){
      commit('setLoading', true)
      commit('clearSuccess')
      commit('clearError')
      const projects = []
      firebase.firestore().collection('projects').onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
              if(change.type == 'added'){
                  let doc = change.doc
                  projects.push({
                      id: doc.id,
                      title: doc.data().title,
                      content: doc.data().content,
                      imageUrl: doc.data().imageUrl,
                      date: moment(doc.data().date).format('lll'),
                      slug: doc.data().slug,
                      internt: doc.data().internt,
                      eksternt: doc.data().eksternt,
                      utvalgt: doc.data().utvalgt,
                      creatorId: doc.data().creatorId
                  })
              }
              if(change.type == 'modified'){
                console.log('Modifisert data!')
              }
          })
          commit('setLoadedProjects', projects)
          commit('setLoading', false)
      })
    },
    // LAGER ET NYTT PROSJEKT
    createProject({commit, getters}, payload){
      commit('clearError')
      commit('clearSuccess')
      const project = {
        title: payload.title,
        content: payload.content,
        date: payload.date,
        slug: payload.slug,
        internt: false,
        eksternt: false,
        utvalgt: false,
        produksjon: false,
        creatorId: firebase.auth().currentUser.uid
      }
      // LAGRER I DATABASEN
      let imageUrl
      let key

      firebase.firestore().collection('projects').add(project)
      .then((data) => {
        key = data.id
        return key
      }).then(key => {
        const filename = payload.image.name
        const ext = filename.slice(filename.lastIndexOf('.'))
        return firebase.storage().ref('projects/' + key + '.' + ext).put(payload.image)
      }).then(fileData => {
        return fileData.ref.getDownloadURL()
        .then(downloadUrl => {
          imageUrl = downloadUrl
          return firebase.firestore().collection('projects').doc(key).update({imageUrl: downloadUrl})
        })
        /* imageUrl = fileData.metadata.downloadURLs[0]
        return firebase.firestore().collection('projects').child(key).update({imageUrl: imageUrl}) */
      }).then(() => {
        let success = {message: 'Takk for ditt bidrag!'}
        commit('setSuccess', success)
        commit('createProject', {
          ...project,
          imageUrl: imageUrl,
          id: key
        })
      }).catch((error) => {
        console.log(error)
      })
    },
    // OPPDTATERER PROSJEKTET TIL INTERNT
    updateToInternt({commit}, payload){
      commit('clearSuccess')
      commit('clearError')
      console.log(payload.id)
      firebase.firestore().collection('projects').doc(payload.id).update({
          internt: true,
          eksternt: false,
          produksjon: false
      }).then(() => {
          console.log('oppdatert til internt - ' + payload.title) 
      }).catch(error => {
          console.log(error)
      })
    },
    // OPPDATER PROSJEKTET TIL EKSTERNT
    updateToEksternt({commit}, payload){
      commit('clearSuccess')
      commit('clearError')
      console.log(payload.id)
      firebase.firestore().collection('projects').doc(payload.id).update({
          eksternt: true,
          internt: false,
          produksjon: false
      }).then(() => {
          console.log('oppdatert til eksternt - ' + payload.title) 
      }).catch(error => {
          console.log(error)
      })
    },
    // OPPDATER PROSJEKTET TIL INTERNT
    updateToUtvalgt({commit}, payload){
      commit('clearSuccess')
      commit('clearError')
      console.log(payload.id)
      firebase.firestore().collection('projects').doc(payload.id).update({
          eksternt: payload.eksternt,
          internt: payload.internt,
          produksjon: payload.produksjon,
          utvalgt: true
      }).then(() => {
          console.log('oppdatert til utvalgt - ' + payload.title) 
      }).catch(error => {
          console.log(error)
      })
    },
    // OPPDATER PROSJEKTET TIL PRODUKSJON
    updateToProduksjon({commit}, payload){
      commit('clearSuccess')
      commit('clearError')
      console.log(payload.id)
      firebase.firestore().collection('projects').doc(payload.id).update({
          eksternt: payload.eksternt,
          internt: payload.internt,
          produksjon: true,
          utvalgt: payload.utvalgt
      }).then(() => {
          console.log('oppdatert til produksjon - ' + payload.title) 
      }).catch(error => {
          console.log(error)
      })
    },
    deleteProject({commit}, payload){
      firebase.firestore().collection('projects').doc(payload.id).delete()
      console.log('Slettet prosjekt ' + payload.title)
    },
    // REGISTRERER EN NY BRUKER
    signUserUp({commit, getters}, payload){
      commit('setLoading', true)
      commit('clearSuccess')
      commit('clearError')
      
      firebase.firestore().collection('users').doc(payload.user.phone).get()
      .then(doc => {
        console.log(doc)
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
              gdpr: payload.user.gdpr,
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
            const newUser = [
              id = user.uid
            ]
            commit('setUser', newUser)
          }).catch((error) => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          })
        }
      })
    },
    // OPPDATERER BRUKER EPOST OG TELEFONNUMMER
    updateUser({commit,getters}, payload){
      commit('setLoading', true)
      commit('clearSuccess')
      commit('clearError')
      const updateObj = {}

      if(payload.email){
        updateObj.email = payload.email
      }
      if(payload.phone){
        updateObj.phone = payload.phone
      }

      const userDoc = getters.user[0].phone
      firebase.auth().currentUser.updateEmail(payload.email).then(() => {
        commit('setLoading', false)
        commit('updateUser', payload)
        let success = {message: 'Epost adresse er endret'}
        commit('setSuccess', success)
      }).then(() => {
        
      }).catch(error => {
        console.log(error)
        commit('setError', error)
        commit('setLoading', false)
      })

    },
    // LOGGER BRUKER INN
    signUserIn({commit}, payload){
      commit('setLoading', true)
      commit('clearSuccess')
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
      commit('clearSuccess')
      commit('clearError')
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
                console.log('Bruker epost ' + doc.data().email)
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
    },
    // FJERNER SUCCESS MELDINGEN
    clearSuccess({commit}){
      commit('clearSuccess')
    }
  },
  getters: {
    loadedProjects (state) {
      return state.loadedProjects
    },
    loadedProject (state) {
      return (projectId) => {
        return state.loadedProjects.find((project) => {
          return project.id === projectId
        })
      }
    },
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
    produksjonProsjekter(state){
      return state.loadedProjects.filter(project => project.produksjon === true)
    },
    brukerProsjekter(state){
      return state.loadedProjects.filter(project => project.creatorId === state.user[0].userId)
    },
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
    },
    success(state){
      return state.success
    }
  }
})
