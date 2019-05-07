import { firestoreAction } from 'vuexfire';
import db from '@/db'
import firebase from '@/firebase'


const state = {
  prosjekter: [],
  admin: []
}

const actions = {

  createProject({commit}, payload){
      
    const project = {
      title: payload.title,
      content: payload.content,
      date: payload.date,
      slug: payload.slug,
      kategori: null,
      imageUrl: payload.image,
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
  }
}

export default {
  namespaced: true,
  state,
  actions,
};