<template>
    <div class="dashboard container">
        <h2>Dashboard</h2>
        
        <div class="collection">
            <div class="prosjekter" v-for="(project, index) in projects" :key="index">
                <div class="vis">
                    <button>Vis</button>
                    <button>Ikke vis</button>
                </div>
                    <!-- <input type="checkbox" :value="project.title" :id="project.slug" v-model="showing" >{{project.showing}} -->
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
            showing: []
        }
    },
    methods: {
        editProject(){
            console.log("Vises")
            if(e.target.checked){
                console.log(e.target.value)
            }


            /* if(this.projects){
                db.collection('smoothies').doc(this.project.showing).update({
                    showing: true
                }).then(() => {
                    console.log("oppdatert")
                }).catch(err => {
                    console.log(err)
                })
            } else {
                this.feedback = 'You must enter a smoothie title'
            } */
        }
    },
    created(){
        document.title = 'Dashboard'

        let ref = db.collection('projects')

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
