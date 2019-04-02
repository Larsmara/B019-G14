<template>
    <div class="container pt-4">
        <button class="align-self-start btn hk-btn" @click="goBack">Tilbake</button>
        <!-- PROSJEKT VISNING -->
    <section id="prosjekterVisning" class="my-5 pt-5">
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
                            <small class="text-muted">Innsendt: {{moment(prosjekt.date).format('lll')}}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
</template>

<script>
import moment from 'moment'
import firebase from '@/firebase'

export default {
    data(){
        return{
            prosjekt: {},
            moment
        }
    },
    props: ['id'],
    created(){
        window.scrollTo(0,0)
        console.log(this.id)
        firebase.firestore().collection('projects').doc(this.id).get()
        .then(doc => {
            console.log(doc.data())
            this.prosjekt = doc.data()
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
