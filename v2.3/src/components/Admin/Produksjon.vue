<template>
    <div>
        <Toasts></Toasts>
        
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard - Prosjekter i produksjon</h1>
      </div>

      <div class="table-responsive">
        <b-media vertical-align="center" class="border p-3 my-3 shadow-sm bg-white" v-for="(project, index) in prosjekt" :key="project.id">
            <img v-if="!project.imageUrl" src="../../assets/idea2.jpg" slot="aside" blank blank-color="#ccc" width="80" height="80" alt="placeholder" class="d-none d-sm-block" />
            <img v-else :src="project.imageUrl" slot="aside" blank blank-color="#ccc" width="80" height="80" alt="placeholder" class="d-none d-sm-block"/>

            <h5 class="mt-0 mb-1">{{project.title}} - {{project.id}}</h5>
            <p class="mb-0">{{project.content}}</p>
            <p><small class="text-muted">{{project.date}}</small></p>
            <div class="btn-group pt-2" role="group" aria-label="Basic example">
                <b-button class=" hk-outline-btn" :to="'/prosjekt/' + project.id">Les mer</b-button>
                <button type="button" class="btn hk-outline-danger" @click="slettProsjekt(project, index)">Slett</button>
                <button type="button" class="btn hk-outline-btn" @click="oppdaterProsjekt(project, index, 'produksjon', true)">Synlig</button>
            </div>
            <div class="btn-group pt-2" role="group">
                <button type="button" class="btn hk-outline-btn" @click="oppdaterProsjekt(project, index, 'eksternt')">Eksterne</button>
                <button type="button" class="btn hk-outline-btn" @click="oppdaterProsjekt(project, index, 'utvalgt')">Utvalgt</button>
                <button type="button" class="btn hk-outline-btn" @click="oppdaterProsjekt(project, index, 'utvalgt')">Vis prosjekt</button>
            </div>
            <div class="btn-group pt-2" role="group">
                <button type="button" class="btn hk-outline-btn" @click="oppdaterProsjekt(project, index, 'skole')">Skole</button>
                <button type="button" class="btn hk-outline-btn" @click="oppdaterProsjekt(project, index, 'teknisk')">Teknisk</button>
                <button type="button" class="btn hk-outline-btn" @click="oppdaterProsjekt(project, index, 'helse')">Helse</button>
            </div>
        </b-media>
      </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'
import { mapState, mapActions } from 'vuex';


export default {
    data() {
        return{
            prosjekt: []
        }
    },
    created(){
            firebase.firestore().collection('projects').where('kategori', '==', 'produksjon').orderBy('date')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type == 'added'){
                        this.prosjekt.push({
                            id: change.doc.id,
                            title: change.doc.data().title,
                            content: change.doc.data().content,
                            imageUrl: change.doc.data().imageUrl,
                            date: moment(change.doc.data().date).format('lll'),
                            slug: change.doc.data().slug,
                            creatorId: change.doc.data().creatorId,
                            kategori: change.doc.data().kategori
                        })
                    } 
                })
            })
 
    },
    methods: {
        oppdaterProsjekt(project, index, type, synlig){
            this.prosjekt.splice(index, 1)             
            firebase.firestore().collection('projects').doc(project.id).update({
                kategori: type,
                synlig: synlig,
            }).then(() => {
                console.log('oppdatert til: ' + type + ' ' + project.title) 
                this.$toast.success('Flyttet ' + '"' + project.title + '"' + ' til ' + type)
            }).catch(error => {
                console.log(error)
            })
            
        },
        slettProsjekt(project, index){
            this.prosjekt.splice(index, 1)
            this.$toast.warning('Prosjektet har blitt slettet.')
            firebase.firestore().collection('projects').doc(project.id).delete()
        }
    },
}
</script>