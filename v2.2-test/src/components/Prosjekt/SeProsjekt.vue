<template>
<div id="home-section" class="home-section bg-light">
    <div class="container pt-5">
        <button class="align-self-start btn hk-btn" @click="goBack">Tilbake</button>
        <!-- PROSJEKT VISNING -->
    <section id="prosjekterVisning" class="">
        <div class="container">
            <div class="row">
                <div class="col pb-5">
                    <div class="card w-75 h-100 text-center">
                        <div class="card-body">
                            <img v-if="!prosjekt.imageUrl" src="../../assets/idea.png" alt="Standard prosjekt bilde om innsender ikke legger ved ett" class="img-fluid rounded w-25 mb-3 pt-5">
                            <img v-else :src="prosjekt.imageUrl" alt="Prosjekt bilde fra innsender" class="img-fluid rounded w-50 mb-3 border">
                            <h3 class="text-center">{{prosjekt.title}}</h3>
                            <hr>
                            <div class="text-left" v-html="prosjekt.content"></div>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Innsendt: {{moment(prosjekt.date).format('lll')}} </small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3" v-if="user.admin">
                    <div class="card">
                        <div class="card-body">
                            <h5>Sendt inn av:</h5>
                            <p>{{bruker.fnavn}} {{bruker.enavn}}</p>
                            <h5>E-post:</h5>
                            <p>{{bruker.email}}</p>
                            <h5>Telefon:</h5>
                            <p>{{bruker.telefon}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
</div>
</template>

<script>
import moment from 'moment'
import firebase from '@/firebase'
import { mapActions, mapState } from 'vuex'


export default {
    data(){
        return{
            prosjekt: {},
            bruker: [],
            moment
        }
    },
    computed: mapState('auth', ['user', 'isLoggedIn']),
    props: ['id'],
    created(){
        window.scrollTo(0,0)
        console.log(this.id)
        firebase.firestore().collection('projects').doc(this.id).get()
        .then(doc => {
            console.log(doc.data())
            this.prosjekt = doc.data()
            const creator = doc.data().creatorId

            firebase.firestore().collection('users').doc(creator).get()
            .then(doc => {
                this.bruker = doc.data()
            })
        })  
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>


<style>

</style>
