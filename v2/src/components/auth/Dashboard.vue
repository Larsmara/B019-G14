<template>
    <div class="dashboard container">
        <h2>Dashboard</h2>

        <div class="collection">
            <div class="prosjekter collection-item" v-for="(project, index) in projects" :key="project.projectId">
                <div class="vis">
                    <button class="btn btn-small" @click.prevent="showProject(project)" id="{project.id}">Vis</button>
                    <button class="btn red btn-small" @click.prevent="hideProject(project)">Ikke vis</button>
                    <button class=" btn btn-small right" @click="deleteProject(project.projectId)"><i class="material-icons">delete</i></button>
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
            feedback: null
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
        },
        deleteProject(id){
            // Delete doc from firestore
            db.collection('projects').doc(id).delete()
            .then(() => {
                this.projects = this.projects.filter(project => {
                return projects.id != id
                })
                window.location.reload();
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
                        id: doc.data().id,
                        timestamp: moment(doc.data().timestamp).format('lll'),
                        projectId: doc.id
                    })
                }
            })
        })
    }
}
</script>

<style>

.prosjekter{
  max-width: 50%;
  margin-top: 40px;
}

.vis{
  display: block;
  padding: 4px 20px;
}

</style>
