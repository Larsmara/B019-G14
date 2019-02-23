<template>
    <div class="project-show container">
        <div v-for="pro in project" :key="pro.id">
            <h3>{{pro.title}}</h3>
            <p>{{pro.content}}</p>
            <p>{{pro.time}}</p>
            <p>{{pro.user.email}}</p>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import Project from './Project'
import Projects from './Project'
import moment from 'moment'

export default {
    name: 'ProjectShow',
    data(){
        return {
            project: []
        }
    },
    created(){
        console.log(this.$route.params.id)
        let project = db.collection("projects")
        console.log(project)

        project.where('slug', '==', this.$route.params.id)
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.project.push({
                        title: doc.data().title,
                        content: doc.data().content,
                        user: doc.data().user_id,
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

</style>
