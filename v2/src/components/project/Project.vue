<template>
    <div class="project container">
        <h2 class="center">Alle innsendte forslag</h2>
        <div class="collection">
            <router-link v-for="project in projects" :key="project.id" :to="{name: 'ProjectShow', params: {id: project.projectId}}" class="collection-item" :value="project.projectId">
                {{project.title}}
            </router-link>
        </div>
        <!-- <ul class="collection">
            <li class="collection-item" v-for="project in projects" :key="project.id">
                <span class="teal-text center title">{{project.title}}</span> -
                <span class="teal-text">{{project.content}}</span>
                <span class="grey-text time">{{project.timestamp}} - Bruker: {{project.user}}</span>
            </li>
            
        </ul> -->
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
        
        let ref = db.collection('projects')

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.projects.push({
                        title: doc.data().title,
                        content: doc.data().content,
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

