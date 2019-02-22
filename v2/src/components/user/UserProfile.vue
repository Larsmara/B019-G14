<template>
    <div class="user-profile">
        <div class="row">
            <div class="col s3 center sidebar">
                <p class="blue-text">{{this.name}}</p>
                <p>{{this.email}}</p>
                <p>{{this.phone}}</p>
            </div>
            <div class="col s9">
                <h2 class="blue-text center">Prosjekter</h2>
                <ul class="collection">
                    <li class="collection-item" v-for="project in projects" :key="project.id">
                        <span>{{project.title}}</span> - 
                        <span>{{project.content}}</span>
                        <span class="grey-text time">{{project.time}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import moment from 'moment'

export default {
    name: 'ViewProfile',
    data(){
        return {
            user: null,
            email: null,
            name: null,
            phone: null,
            feedback: null,
            projects: []
        }
    },
    created(){
        let ref = db.collection('users')
        let project = db.collection('projects')

        //get current user
        ref.where('user_id', '==', firebase.auth().currentUser.uid).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                this.user = doc.data(),
                this.email = doc.data().email,
                this.name = doc.data().name,
                this.phone = doc.data().phone
                /* console.log(doc.data().user_id)
                console.log(doc.data()) */
                console.log("User uid fra profil: "+firebase.auth().currentUser.uid)
            })
        })

        // get users projects
        project.where('user_id', '==', this.$route.params.id)
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.projects.push({
                        title: doc.data().title,
                        content: doc.data().content,
                        time: moment(doc.data().timestamp).format('lll')
                    })
                    console.log(change.doc.data())
                }
            })
        })
        
    }
}
</script>

<style>

.user-profile{
    margin-top: 60px;
}

.sidebar{
    height: 80vh;
    border-right: 1px solid black;
}

.user-profile .time{
    display: block;
    font-size: 0.8em;
}

</style>
