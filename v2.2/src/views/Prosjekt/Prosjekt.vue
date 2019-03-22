<template>
    <div class="prosjekt">
        <div class="mb-2 mt-4 knapper">
            <b-button variant="info" router to="/prosjekter">Prosjekter i produksjon</b-button>
            <b-button variant="info" class="ml-2" router to="/prosjekter/test">Utvalgte prosjekter</b-button>
        </div>

        <b-container class="prosjekt-container w-75 p-3" fluid>
            <b-row>
                <!-- <div class="card mb-4 mr-2 ml-2 " style="width: 18rem;" v-for="project in projects" :key="project.id">
                    <img v-if="!project.imageUrl" src="https://picsum.photos/600/300/?image=25" class="card-img-top" alt="Standard bilde">
                    <img v-if="project.imageUrl" :src="project.imageUrl" class="card-img-top" alt="Prosjekt bilde">
                    <div class="card-body">
                        <h5 class="card-title">{{project.title}}</h5>
                        <p class="card-text">{{project.content}}</p>
                        <a href="#" class="btn btn-info">Les Mer</a>
                    </div>
                </div> -->
                <b-card v-for="project in prosjekt" :key="project.id"
                    :title=project.title
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="width: 20rem;"
                    class="mb-4 mr-2 ml-4"
                    >
                    <b-card-img></b-card-img>
                    <b-card-text>
                    {{project.content}}
                    </b-card-text>

                    <b-button href="#" variant="info">Les mer</b-button>
                </b-card>

                <!-- <b-card no-body class="overflow-hidden mr-2 mb-2" style="max-width: 540px;" v-for="project in prosjekt" :key="project.id">
                    <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img v-if="!project.imageUrl" src="https://picsum.photos/400/400/?image=20" class="rounded-0" />
                        <b-card-img v-if="project.imageUrl" :src="project.imageUrl" class="rounded-0" />
                    </b-col>
                    <b-col md="6">
                        <b-card-body :title=project.title>
                        <b-card-text>
                            {{project.content}}
                        </b-card-text>
                        <b-button>Les mer</b-button>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card> -->

            </b-row>
        </b-container>
    </div>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'

export default {
    name: 'Prosjekt',
    data(){
        return{
            prosjekt: []
        }
    },
    created(){
        document.title = "Prosjekter"

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
    computed: {
      projects () {
          return this.$store.getters.produksjonProsjekter
      },
      loading(){
          return this.$store.getters.loading
      },
      success(){
          return this.$store.getters.success
      }
    }
}
</script>

<style>
.knapper{
    text-align: center;
}
</style>
