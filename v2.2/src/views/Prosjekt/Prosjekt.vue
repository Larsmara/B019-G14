<template>
    <div class="container pt-4">
        <!-- NAVIGASJON MELLOM PRODUKSJON OG UTVALGTE -->
        <div class="row">
            <div class="col text-center pt-3">
                <p class="d-lg-none h4">Prosjekter i produksjon</p>
                <router-link class=" my-2 btn btn-lg hk-btn" to="/prosjekter">Prosjekter i produksjon</router-link>
                <router-link class="ml-2 my-2 btn btn-lg hk-btn" to="/prosjekter/utvalgte">Utvalgte prosjekter</router-link>
                <p class="h1 d-none d-lg-block pb-4">Prosjekter i Produksjon</p>
            </div>
        </div>

        <!-- PROSJEKT VISNING -->
    <section id="prosjekter" class="my-5 text-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 pb-5" v-for="project in projects" :key="project.id">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <img v-if="!project.imageUrl" src="../../assets/idea2.jpg" alt="Standard prosjekt bilde om innsender ikke legger ved ett" class="img-fluid rounded-circle w-50 mb-3">
                            <img v-else :src="project.imageUrl" alt="Prosjekt bilde fra innsender" class="img-fluid rounded-circle w-50 mb-3">
                            <h3>{{project.title}}</h3>
                            <p>{{project.content}}</p>
                            <router-link class="btn hk-btn btn-block mt-auto" router :to="'/prosjekt/' + project.id">Les mer</router-link>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">{{project.date}}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

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
      element.classList.add("active", "hk-nav-active");
    },
    destroyed() {
        var element = document.getElementById("prosjekter");
        element.classList.remove("active", "hk-nav-active");
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
