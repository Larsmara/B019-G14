<template>
    <div class="prosjekt">
        <div class="mb-2 mt-4 knapper">
            <b-button variant="info" router to="/prosjekter">Prosjekter i produksjon</b-button>
            <b-button variant="info" class="ml-2" router to="/prosjekter/utvalgte">Utvalgte prosjekter</b-button>
            <h2 class="mt-4">Prosjekter i produksjon</h2>
        </div>

        <b-container class="prosjekt-container w-75 p-3" fluid>
            <b-row>
                <div class="card mb-4 mr-2 ml-2 " style="width: 20rem;" v-for="project in projects" :key="project.id">
                    <img v-if="!project.imageUrl" src="https://picsum.photos/600/300/?image=25" class="card-img-top" alt="Standard bilde">
                    <img v-if="project.imageUrl" :src="project.imageUrl" class="card-img-top" alt="Prosjekt bilde">
                    <div class="card-body">
                        <h5 class="card-title">{{project.title}}</h5>
                        <p class="card-text">{{project.content}}</p>
                        <b-button variant="info" router :to="'/prosjekt/' + project.id">Les mer</b-button>
                    </div>
                </div>
                <!-- <b-card v-for="project in projects" :key="project.id"
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

                    <b-button href="#" class="btn">Les mer</b-button>
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

        }
    },
    created(){
        document.title = "Prosjekter"
        var element = document.getElementById("prosjekter");
        element.classList.add("active");
    },
    destroyed() {
        document.title = "Prosjekter"
        var element = document.getElementById("prosjekter");
        element.classList.toggle("active");
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
