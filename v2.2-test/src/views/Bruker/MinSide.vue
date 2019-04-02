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
                        <p class="d-flex"><i class="fas fa-envelope pt-1 pr-1"></i> {{user.email}} <button v-b-modal.modal-multi-1 class="btn hk-outline-btn btn-sm ml-auto">Endre epost</button></p>
                        <p><i class="fas fa-user"></i> {{user.fnavn}} {{user.enavn}}</p>
                        <p class="d-flex"><i class="fas fa-phone pt-1 pr-1"></i> {{user.telefon}} <button class="btn hk-outline-btn btn-sm ml-auto">Endre telefon</button> </p>
                        <p class="card-text text-muted">Ble medlem: {{moment(user.joined).format('lll')}}</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-8 col-md-12">
                <div class="container">
                <b-media vertical-align="center" class="border p-3 my-3 shadow-sm" v-for="project in prosjekter.slice((currentPage-1)*perPage, (currentPage-1)*perPage+4)" :key="project.id">
                    <img v-if="!project.imageUrl" src="../../assets/idea2.jpg" slot="aside" blank blank-color="#ccc" width="80" height="80" alt="placeholder" />
                    <img v-else :src="project.imageUrl" slot="aside" blank blank-color="#ccc" width="80" height="80" alt="placeholder" />

                    <h5 class="mt-0 mb-1">{{project.title}}</h5>
                    <p class="mb-0">{{project.content}}</p>
                    <p><small class="text-muted">{{moment(project.date).format('lll')}}</small></p>
                    <div class="mt-1">
                        <router-link class="btn hk-btn mt-auto" router :to="'/prosjekt/' + project.id">Les mer</router-link>
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
    <b-modal centered hide-footer id="modal-multi-1" title="Endre epost adresse" no-stacking>
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
            <div class="knapper mt-2">
                <button v-b-modal.modal-multi-2 class="btn btn-link" style="color: rgb(0,114,187)">Glemt passord?</button>
            </div>
        </form>
    </b-modal>

    <b-modal centered hide-footer id="modal-multi-2" title="Glemt passord?">
        <form @submit.prevent="resetPassord(bruker)">
            <div class="form-group">
                <label>Send nytt passord</label>
                <input type="email" v-model="bruker.email" class="form-control" placeholder="Ny e-post">
            </div>
            <button type="submit" class="btn hk-btn btn-block">Send nytt passord</button>
        </form>
    </b-modal>

</div>
</template>

<script>
import moment from 'moment'
import { mapActions, mapState } from 'vuex'
import firebase from '@/firebase'

export default {
    props: ['id'],
    data(){
        return{
            moment,
            prosjekter: [],
            perPage: 4,
            currentPage: 1,
            bruker: {
                email: '',
                password: '',
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
        endreEpost(bruker){

            var user = firebase.auth().currentUser;
            var credential = firebase.auth.EmailAuthProvider.credential(
                this.user.email, 
                bruker.password
            );

            user.reauthenticateAndRetrieveDataWithCredential(credential)
            .then(function() {
                console.log('Bruker er reauthenticated')
            }).then(() => {

                firebase.auth().currentUser.updateEmail(bruker.email)
                    .then(() => {
                        console.log('Oppdatert epost til: ' + bruker.email)
                        firebase.firestore().collection('users').doc(this.user.id).update({
                            email: bruker.email
                        }).then(() => {
                            console.log('Oppdatert database: ' + bruker.email)
                            location.reload()
                        }).catch(error => {
                            console.log(error)
                        })
                    }).catch(error => {
                        console.log(error)
                    })

            }).catch(function(error) {
                console.log(error)
            });

            
        },
        resetPassord(reset){
            console.log(reset.email)
            firebase.auth().sendPasswordResetEmail(reset.email)
            .then(() => {
                console.log('Epost sendt')
            }).catch(error => {
                console.log(error)
            }) 
        }
    },
    created(){
      document.title = "Min Side"
      var element = document.getElementById("minSide");
      element.classList.add("active", "hk-nav-active");

      firebase.firestore().collection('projects').where('creatorId', '==', firebase.auth().currentUser.uid).orderBy('date')
        .onSnapshot(snapshot => {
            snapshot.forEach(doc => {
                this.prosjekter.push(doc.data())
            })
        })
    },
    destroyed() {
        var element = document.getElementById("minSide");
        element.classList.remove("active", "hk-nav-active");
    },
}
</script>
