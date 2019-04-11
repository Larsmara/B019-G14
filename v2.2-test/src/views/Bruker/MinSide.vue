<template>
<div class="min-side bg-light">
    <div class="pt-5">
        <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-12 col-xs-10">
                <div class="card shadow-sm">
                    <div class="card-header">
                        Min info
                    </div>
                    <div class="card-body">
                        <p class="d-flex"><i class="fas fa-envelope pt-1 pr-1"></i> {{user.email}} <button @click="showModal(1)" class="btn hk-outline-btn btn-sm ml-auto">Endre epost</button></p>
                        <p><i class="fas fa-user"></i> {{user.fnavn}} {{user.enavn}}</p>
                        <p class="d-flex"><i class="fas fa-phone pt-1 pr-1"></i> {{user.telefon}} <button  @click="showModal(3)" class="btn hk-outline-btn btn-sm ml-auto">Endre telefon</button> </p>
                        <p class="card-text text-muted">Ble medlem: {{moment(user.joined).format('lll')}}</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-8 col-md-12">
                <div class="container">
                <b-media vertical-align="center" class="border p-3 my-3 shadow-sm d-flex" v-for="project in prosjekter.slice((currentPage-1)*perPage, (currentPage-1)*perPage+4)" :key="project.id">
                    <img v-if="!project.data.imageUrl" src="../../assets/idea2.jpg" slot="aside" blank blank-color="#ccc" width="80" height="80" alt="placeholder" />
                    <img v-else :src="project.data.imageUrl" slot="aside" blank blank-color="#ccc" width="80" height="80" alt="placeholder" />

                    <h5 class="mt-0 mb-1">{{project.data.title}}</h5>
                    <p class="mb-0">{{project.data.content}}</p>
                    <p><small class="text-muted">{{moment(project.data.date).format('lll')}}</small></p>
                    <div class="mt-1 d-flex">
                        <router-link class="btn hk-btn mt-auto" router :to="'/prosjekt/' + project.id">Les mer</router-link>

                        <span v-if="project.data.kategori == 'produksjon'" class="ml-auto">{{project.data.kategori}}</span>
                    </div>
                </b-media>
                </div>
                <b-pagination class="pb-4"
                v-model="currentPage"
                align="center"
                :total-rows="prosjekter.length"
                :per-page="perPage"
                /> 
            </div>
        </div>
    </div>

    <!-- MODALS -->
    <b-modal centered hide-footer id="modal-multi-1" ref="my-modal1" title="Endre epost adresse" no-stacking>
        <app-feil v-if="feil" :text="feil.message"></app-feil>
        <app-suksess v-if="suksess" :text="suksess.message"></app-suksess>
        <form @submit.prevent="endreEpost(bruker)">
            <div class="form-group">
                <label>Ny e-post</label>
                <input type="email" v-model="bruker.email" class="form-control" placeholder="Ny e-post">
            </div>
            <div class="form-group">
                <label>Passord <span v-b-tooltip.hover title="Du må skrive inn passordet til kontoen din for å kunne bytte epost adresse"><i class="far fa-question-circle"></i></span></label>
                <input type="password" v-model="bruker.password" class="form-control" placeholder="Passord">
            </div>
            <button type="submit" class="btn hk-btn btn-block">Lagre</button>
        </form>
        <div class="knapper mt-2">
                <button @click="showModal(2)" class="btn btn-link" style="color: rgb(0,114,187)">Glemt passord?</button>
            </div>
    </b-modal>

    <b-modal centered hide-footer id="modal-multi-2" ref="my-modal2" title="Glemt passord?">
        <app-feil v-if="feil" :text="feil.message"></app-feil>
        <app-suksess v-if="suksess" :text="suksess.message"></app-suksess>
        <form @submit.prevent="resetPassord(bruker)">
            <div class="form-group">
                <label>Send nytt passord</label>
                <input type="email" v-model="bruker.email" class="form-control" placeholder="Din e-post">
            </div>
            <button type="submit" class="btn hk-btn btn-block">Tilbakestill passord</button>
        </form>
    </b-modal>

    <b-modal centered hide-footer id="modal3" ref="my-modal3" title="Endre telefonnummer">
        <app-feil v-if="feil" :text="feil.message"></app-feil>
        <app-suksess v-if="suksess" :text="suksess.message"></app-suksess>
        <form @submit.prevent="endreTlf(tlf)">
            <div class="form-group">
                <label>Nytt telefonnummer</label>
                <input type="text" v-model="tlf.telefon" class="form-control" placeholder="Nytt telefonnummer" >
                <small v-if="tlfFeedback" class="form-text text-danger">{{tlfFeedback}}</small>
            </div>
            <button v-if="!suksess" type="submit" class="btn hk-btn btn-block">Lagre</button>
            <button v-if="suksess" type="submit" class="btn hk-btn btn-block" disabled><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
        </form>
    </b-modal>

</div>
</template>


<script>
import moment from 'moment'
import { mapActions, mapState } from 'vuex'
import firebase from '@/firebase'
import { setTimeout } from 'timers';

export default {
    props: ['id'],
    data(){
        return{
            show: false,
            moment,
            prosjekter: [],
            perPage: 4,
            currentPage: 1,
            tlfFeedback: '',
            suksess: false,
            feil: false,
            bruker: {
                email: '',
                password: '',
            },
            tlf: {
                telefon: ''
            }
        }
    },
    computed: {
        ...mapState('auth', ['user', 'isLoggedIn']),
        rows(){
            return this.prosjekter.length
        }
    },
    methods: {
        showModal(tall){
            this.$refs['my-modal'+tall].show()
            this.feil = false
            this.suksess = false
        },
        endreEpost(bruker){

            var user = firebase.auth().currentUser;
            var credential = firebase.auth.EmailAuthProvider.credential(
                this.user.email, 
                bruker.password
            );

            user.reauthenticateAndRetrieveDataWithCredential(credential)
            .then(function() {
            }).then(() => {
                firebase.auth().currentUser.updateEmail(bruker.email)
                    .then(() => {
                        console.log('Oppdatert epost til: ' + bruker.email)
                        firebase.firestore().collection('users').doc(this.user.id).update({
                            email: bruker.email
                        }).then(() => {
                            this.suksess = {message: 'Din e-post er nå oppdatert!'}
                            location.reload()
                        }).catch(error => {
                            this.feil = {message: error.message}
                        })
                    }).catch(error => {
                        this.feil = {message: error.message}
                    })

            }).catch(function(error) {
                this.feil = {message: error.message}
            });

            
        },
        resetPassord(reset){
            firebase.auth().sendPasswordResetEmail(reset.email)
            .then(() => {
                this.suksess = {message: 'En epost er blitt sendt for å tilbakestille passord'}
            }).catch(error => {
                console.log(error.message)
                this.feil = {message: 'Eposten finnes ikke eller er skrevet feil'}
            }) 
        },
        endreTlf(tlf){
            console.log(tlf.telefon)
            if(tlf.telefon.length > 8){
                this.feil = {message: 'Telefonnummeret er for langt'}
                this.suksess = false
            } else {
                this.feil = false
                firebase.firestore().collection('users').doc(this.user.id).update({
                    telefon: tlf.telefon
                }).then(() => {
                    this.feil = false
                    this.suksess = {message: 'Byttet nr til: ' + tlf.telefon}
                    setTimeout(() => {
                        this.$refs['my-modal3'].hide()
                    }, 3000)
                }).catch(error => {
                    console.log(error)
                    this.feil = error
                })
            }
        }
    },
    created(){
      document.title = "Min Side"
      var element = document.getElementById("minSide");
      element.classList.add("active", "hk-nav-active");

      firebase.firestore().collection('projects').where('creatorId', '==', firebase.auth().currentUser.uid).orderBy('date', 'desc')
        .onSnapshot(snapshot => {
            snapshot.forEach(doc => {
                this.prosjekter.push({
                        data: doc.data(),
                        id: doc.id
                    })
            })
        })
    },
    destroyed() {
        var element = document.getElementById("minSide");
        element.classList.remove("active", "hk-nav-active");
    },
}
</script>
