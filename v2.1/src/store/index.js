import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import moment from 'moment'

Vue.use(Vuex)
moment.locale('nb')

export const store = new Vuex.Store({
  state: {
    loadedProjects: [],
    loadedUser: [],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedProjects(state, payload){
      state.loadedProjects = payload
    },
    /* createProject(state, payload){
      state.loadedProjects.push(payload)
    }, */
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
    // HENTER PROSJEKTER FRA DATABASEN
    loadProjects({commit}){
      commit('setLoading', true)
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
                      creatorId: doc.data().creatorId
                  })
              }
          })
          commit('setLoadedProjects', projects)
          commit('setLoading', false)
      })
    },
    // LAGER ET NYTT PROSJEKT
    createProject({commit, getters}, payload){
      const project = {
        title: payload.title,
        content: payload.content,
        date: payload.date,
        slug: payload.slug,
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
        commit('createProject', {
          ...project,
          imageUrl: imageUrl,
          id: key
        })
      }).catch((error) => {
        console.log(error)
      })
    },
    // REGISTRERER EN NY BRUKER
    signUserUp({commit, getters}, payload){
      commit('setLoading', true)
      commit('clearError')
      
      firebase.firestore().collection('users').doc().get()
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
                  userId: docs.userId
                })  
                console.log(userData)
                console.log("User uid fra profil: "+firebase.auth().currentUser.uid)
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
    loadedProjects (state) {
      return state.loadedProjects.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedProject (state) {
      return (projectId) => {
        return state.loadedProjects.find((project) => {
          return project.id === projectId
        })
      }
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
    }
  }
})
