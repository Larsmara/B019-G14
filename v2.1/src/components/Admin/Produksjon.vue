<template>
    <v-container grid-list-md >
      <h2>Prosjekter i produksjon</h2>
        <v-layout row wrap>
            <v-flex height="350px" xs12 md4 lg4 v-for="(project, index) in prosjekt" :key="project.id">
                <v-card >
                    
                    <v-card-title primary-title>
                    <div>
                        <div class="headline">{{project.title}}</div>
                        <span v-if="project.content.length < 100" class="grey--text">{{project.content}}</span>
                        <span v-if="project.content.length >= 100" class="grey--text">{{project.content.substring(0,100)}}</span>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                      <v-btn bottom flat :to="'/prosjekt/' + project.id" class="blue">Les mer</v-btn>
                      <v-btn bottom flat class="red" @click="deleteProject(project, index)">Slett</v-btn>
                      <v-btn bottom flat class="red" @click="updateToInternt(project, index)">Internt</v-btn>
                    </v-card-actions>
                    <v-card-actions>
                      <v-btn bottom flat class="brown" @click="updateToEksternt(project, index)">Eksterne</v-btn>
                      <v-btn bottom flat class="yellow" @click="updateToUtvalgt(project, index)">Utvalgt</v-btn>
                      <v-btn bottom flat class="green" @click="updateToProduksjon(project, index)">Produksjon</v-btn>
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
    name: 'Interne',
    data () {
      return {
        prosjekt: []
      }
    },
    created(){
        document.title = 'Interne prosjekter'

        firebase.firestore().collection('projects').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(doc.data().produksjon === true){
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
                    produksjon: doc.data().produksjon,
                    creatorId: doc.data().creatorId
                }
                this.prosjekt.push(data)
                }
            })
        })
    },
    methods: {
      updateToInternt(project, index){
            this.prosjekt.splice(index, 1)
            this.$store.dispatch('updateToInternt',project)
        },
        updateToEksternt(project, index){
            this.prosjekt.splice(index, 1)
            this.$store.dispatch('updateToEksternt',project)
        },
        updateToUtvalgt(project, index){
            this.prosjekt.splice(index, 1)
            this.$store.dispatch('updateToUtvalgt',project)
        },
        updateToProduksjon(project, index){
            this.prosjekt.splice(index, 1)
            this.$store.dispatch('updateToProduksjon',project)
        },
        deleteProject(project, index){
            this.prosjekt.splice(index, 1)
            this.$store.dispatch('deleteProject',project)
        }
    },
    computed: {
      projects () {
        return this.$store.getters.interneProsjekter
      }
    }
  }
</script>
