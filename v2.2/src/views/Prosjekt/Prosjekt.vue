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
        <div class="row">
            <div class="col">
                <div class="overflow-auto">


                    <section id="prosjekter" class="my-5 text-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 pb-5" v-for="project in prosjekt.slice((currentPage-1)*perPage, (currentPage-1)*perPage+6)" :key="project.id">
                                    <div class="card shadow-sm h-100">
                                        <div class="card-body">
                                            <img v-if="!project.imageUrl" src="../../assets/idea2.jpg" alt="Standard prosjekt bilde om innsender ikke legger ved ett" class="img-fluid rounded-circle w-50 mb-3">
                                            <img v-else :src="project.imageUrl" alt="Prosjekt bilde fra innsender" class="img-fluid rounded-circle w-50 mb-3">
                                            <h3>{{project.title}}</h3>
                                            <p>{{project.content}}</p>    
                                        </div>
                                        <router-link class="btn hk-btn mx-3 mb-2" router :to="'/prosjekt/' + project.id">Les mer</router-link>
                                        <div class="card-footer">
                                            <small class="text-muted">Innsendt: {{project.date}}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <b-pagination class="pb-4"
                    v-model="currentPage"
                    align="center"
                    :total-rows="prosjekt.length"
                    :per-page="perPage"
                    />                    
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'

export default {
    name: 'Prosjekt',
    data(){
        return{
            perPage: 6,
            currentPage: 1,
            prosjekt: []
        }
    },
    created(){
      document.title = "Prosjekter"
      var element = document.getElementById("prosjekter");
      element.classList.add("active", "hk-nav-active");
      
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
    destroyed() {
        var element = document.getElementById("prosjekter");
        element.classList.remove("active", "hk-nav-active");
    },
    computed: {
        projects () {
            return this.$store.getters.produksjonProsjekter
        },
        projectsLenght () {
            return this.$store.getters.produksjonProsjekter.length
        },
        loading(){
            return this.$store.getters.loading
        },
        success(){
            return this.$store.getters.success
        },
        rows(){
            return this.prosjekt.length
        }
    }
}
</script>

<style>
.knapper{
    text-align: center;
}
</style>
