<template>
    <div class="project container">
        <h2 class="center">Alle innsendte forslag: <span>{{thisMonth.length}}</span></h2>
        <div class="collection">
            <router-link v-for="(project, index) in projects" :key="index" :to="{name: 'ProjectShow', params: {id: project.slug}}" class="collection-item">
                {{index+1}} : {{project.title}} <span class="right red-text" v-if="project.showing == true"> I produksjon</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import moment from 'moment'
import slugify from 'slugify'

export default {
    name:'Project',
    data(){
        return {
            projects: [],
            thisMonth: []
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
                        slug: doc.data().slug,
                        timestamp: moment(doc.data().timestamp).format('lll'),
                        projectId: doc.id
                    })
                    this.thisMonth.push({
                        title: doc.data().title,
                        thisMonth: moment(doc.data().timestamp).startOf('month'),

                    })
                }
            })
        })
    }
}
</script>

<style>

.project {
    max-width: 50%;
    margin: auto;
    margin-top: 3rem;
}

.project .time{
    display: block;
    font-size: 1.28rem;
}

.collection {
    margin-top: 3rem;
}

.collection a.collection-item {
    color: #0072BB;
}

</style>
