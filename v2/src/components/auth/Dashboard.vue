<template>
    <div class="dashboard container">
        <h2>Dashboard</h2>
        
        <div class="collection">
            <div class="prosjekter collection-item" v-for="(project, index) in projects" :key="index">
                <div class="vis">
                    <button @click.prevent="showProject(project)" id="{project.id}">Vis</button>
                    <button @click.prevent="hideProject(project)">Ikke vis</button>
                </div>
                <router-link  :to="{name: 'ProjectShow', params: {id: project.slug}}" class="collection-item">
                    {{index+1}} : {{project.title}} <span class="right red-text" v-if="project.showing == true"> I produksjon</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import moment from 'moment'
import slugify from 'slugify'

export default {
    name: 'Dashboard',
    data(){
        return {
            projects: [],
            feedback: null,
            boolean: false
        }
    },
    methods: {
        showProject(project){
            console.log(project.title + " - Er nå satt i produksjon " + project.projectId)
            
            db.collection("projects").doc(project.projectId).update({
                showing: true
            }).then(() => {
                console.log("Prosjekt oppdatert til produksjon")
                window.location.reload()
            }).catch(err => {
                console.log(err)
            })
        },
        hideProject(project){
            console.log(project.title + " - Er nå tatt ut av produksjon")

            db.collection("projects").doc(project.projectId).update({
                showing: false
            }).then(() => {
                console.log("Prosjekt oppdatert til produksjon")
                window.location.reload()
            }).catch(err => {
                console.log(err)
            })
        }
    },
    created(){
        document.title = 'Dashboard'

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
                }
            })
        })

        if(this.showing == true){
            console.log("Checkbox for å vise prosjekt er sann")
        } else {
            console.log("Prosjekt vises ikke")
        }
    }
}
</script>

<style>

.prosjekter{
    display: 

}

.vis{
    display: block;
    padding: 4px 20px;
}

</style>
