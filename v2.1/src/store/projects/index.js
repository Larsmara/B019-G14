import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import moment from 'moment'

Vue.use(Vuex)
moment.locale('nb')

export default{
  state: {
    loadedProjects: [],
    loading: false,
    error: null
  },
  mutations: {
    setLoadedProjects(state, payload){
      state.loadedProjects = payload
    },
 /*    updateToInternt(state, payload){
      const project = state.loadedProjects.find(project => {
        return project.id === payload.id
      })
      project.internt = true
    }, */
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
      /* firebase.firestore().collection('projects').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
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
          }
          projects.push(data)
        })
        commit('setLoadedProjects', projects)
      }) */
      firebase.firestore().collection('projects').onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
              if(change.type == 'added' || change.type == 'modified'){
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
        commit('createProject', {
          ...project,
          imageUrl: imageUrl,
          id: key
        })
      }).catch((error) => {
        console.log(error)
      })
    },
    // FJERNER FEILMELDINGER HOS BRUKER
    clearError({commit}){
      commit('clearError')
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
    loading(state){
      return state.loading
    },
    error(state){
      return state.error
    }
  }
}
