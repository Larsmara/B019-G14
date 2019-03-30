import firebase from '@/firebase'
import db from '../db'

const state = {
    user: {},
    isLoggedIn: false
};

const mutations = {
    setUser(state, user){
        console.log(user);
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
    async logout(){
        await firebase.auth().signOut()
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};