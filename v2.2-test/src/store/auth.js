import firebase from '@/firebase'
import db from '../db'
import slugify from 'slugify'

const state = {
    user: {},
    isLoggedIn: false
};

const mutations = {
    setUser(state, user){
        if(user){
            state.user = user;
            state.isLoggedIn = true;
        } else {
            state.user = {}
            state.isLoggedIn = false
        }
    }
};

const actions = {
    async login(_,user){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(user => {
        }).catch(error => {
            console.log(error)
        })
        
    },   
    async register({ getters },user){  
         const slug = slugify(user.fnavn + ' ' + user.enavn, {
            replacement: '-',
            remove: /[$*_+~.()'"!\._@]/g,
            lower: true
            })

        firebase.firestore().collection('users').doc(user.telefon).get()
      .then(doc => {
        if(doc.exists){
          console.log('Finnes')
        } else {
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then((doc) => {
              let id = doc.user.uid
            firebase.firestore().collection('users').doc(doc.user.uid).set({
                email: user.email,
                fnavn: user.fnavn,
                enavn: user.enavn,
                telefon: user.telefon,
                isAdmin: false,
                slug: slug,
                joined: Date.now(),
                userId: id
            })
            .then(() => {
              console.log('oppdatert bruker')
            }).catch((error) => {
              console.log(error)
            })
          }).catch((error) => {

            console.log(error)
          })
        }
      })       
    },
    async logout(){
        await firebase.auth().signOut()
        this.$router.push('/')
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};