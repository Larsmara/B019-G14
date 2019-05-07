import firebase from '@/firebase'
import db from '@/db'
import store from './store/index'
import moment from 'moment'

firebase.auth().onAuthStateChanged((user) => {
    
    if(user){
        if(user.user){
            user = user.user
        }
        const setUser =  {
            id: user.uid,
        }

        //db.collection('users').doc(setUser.id).set(setUser)
        db.collection('users').where('userId', '==', user.uid).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                setUser.email = doc.data().email,
                setUser.fnavn = doc.data().fnavn,
                setUser.enavn = doc.data().enavn,
                setUser.telefon = doc.data().telefon,
                setUser.admin = doc.data().isAdmin,
                setUser.joined = doc.data().joined,
                setUser.slug = doc.data().slug
            })
            
        })
        store.commit('auth/setUser', setUser)
    } else {
        store.commit('auth/setUser', null)
    }
})