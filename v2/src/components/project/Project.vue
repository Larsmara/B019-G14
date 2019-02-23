<template>
    <div class="project container">
        <h2 class="center">Alle innsendte forslag: <span>{{projects.length}}</span></h2>
        <div class="collection">
            <router-link v-for="(project, index) in projects" :key="index" :to="{name: 'ProjectShow', params: {id: project.projectId}}" class="collection-item">
                {{index+1}} : {{project.title}} <span class="right red-text" v-if="project.showing == true"> I produksjon</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import moment from 'moment'

export default {
    name:'Project',
    props: [project.projectId],
    data(){
        return {
            projects: []
        }
    },
    created() {
        document.title = "Prosjekter"
        
        let ref = db.collection('projects').orderBy("showing", "desc")

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.projects.push({
                        title: doc.data().title,
                        content: doc.data().content,
                        showing: doc.data().showing,
                        timestamp: moment(doc.data().timestamp).format('lll'),
                        projectId: doc.id
                    })
                    console.log(change.doc.id)
                }
            })
        })
    }
}
</script>

<style>

.project .time{
    display: block;
    font-size: 0.8em;
}

</style>

