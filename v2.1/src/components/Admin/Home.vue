<template>
    <v-container grid-list-md >
        <h2>Alle prosjekter</h2>
        <v-layout row wrap>
            <v-flex height="350px" xs12 md4 lg4 v-for="(project, index) in prosjekt" :key="project.id">
                <v-card>
                    
                    <v-card-title primary-title>
                    <div>
                        <div class="headline">{{project.title}}</div>
                        <span v-if="project.content.length < 100" class="grey--text">{{project.content}}</span>
                        <span v-if="project.content.length >= 100" class="grey--text">{{project.content.substring(0,100)}}</span>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                            <v-btn bottom flat :to="'/prosjekt/' + project.id" class="blue">Les mer</v-btn>
                            <v-btn bottom flat class="red">Slett</v-btn>
                    </v-card-actions>
                    <v-card-actions>
                        <v-btn bottom flat class="green" @click="updateInternt(index, project)">Interne</v-btn>
                        <v-btn bottom flat class="brown" @click="updateToEksternt(project)">Eksterne</v-btn>
                        <v-btn bottom flat class="yellow">Utvalgt</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'
export default {
    name: 'Home',
    data(){
        return{
            prosjekt: []
        }
    },
    methods:{
        updateInternt(index, project){
            
            firebase.firestore().collection('projects').doc(project.id).update({
                internt: true
            }).then(() => {
                this.prosjekt.splice(index, 1)
                console.log('oppdatert til internt - ' + project.title)
            }).catch(error => {
                console.log(error)
            })
        }
    },
    created(){
        document.title = 'Innkommende prosjekter'
        firebase.firestore().collection('projects').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(doc.data().internt === false && doc.data().eksternt === false && doc.data().utvalgt === false){
                const data = {
                    id: doc.id,
                    title: doc.data().title,
                    content: doc.data().content,
                    imageUrl: doc.data().imageUrl,
                    date: moment(doc.data().date).format('lll'),
                    slug: doc.data().slug,
                    internt: doc.data().internt,
                    eksternt: doc.data().eksternt,
                    utvalgt: doc.data().utvalgt,
                    creatorId: doc.data().creatorId
                }
                this.prosjekt.push(data)
                }
            })
        })
    },
    computed: {
        /* projects () {
            return this.$store.getters.adminProject
        }  */
    }
}
</script>
