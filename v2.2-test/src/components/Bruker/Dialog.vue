<template>
<div>
    <b-modal :visible="show" class="m-0 p-0" hide-footer centered title="Smart City" ref="myModalRef">
      <app-feil v-if="feil" :text="feil.message"></app-feil>
        <app-suksess v-if="suksess" :text="suksess.message"></app-suksess>
      <!-- Tabs with card integration -->
      <b-tabs class="m-0 p-0 login-tabs">
        <!-- LOGG INN TAB -->
        <b-tab title="Logg Inn" class="pt-2">
          <form @submit.prevent="onLogin(user)">
            <div class="form-group">
              <label>E-post</label>
              <input type="email" class="form-control" v-model="user.email"  placeholder="Epost" required>
            </div>
            <div class="form-group">
              <label>Passord</label>
              <input type="password" v-model="user.password" class="form-control" placeholder="Passord">
            </div>
            <button v-if="!suksess" type="submit" class="btn hk-btn btn-block">Logg inn</button>
            <button v-if="suksess" type="submit" class="btn hk-btn btn-block" disabled><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
          </form>
            <div class="knapper mt-2">
              <button @click="showModal(2), show = !show" class="btn btn-link text-center" style="color: rgb(0,114,187)">Glemt passord?</button>
            </div>
        </b-tab>
        <!-- REGISTRERINGS TAB -->
        <b-tab title="Registrer deg" class="pt-2">
          <form @submit.prevent="onRegister(user)">
            <div class="form-group">
              <label>Epost</label>
              <input type="email" class="form-control" v-model="user.email"  placeholder="Epost" required>
            </div>
            <div class="form-group">
              <label>Fornavn</label>
              <input type="text" class="form-control" v-model="user.fnavn"  aria-describedby="fnavnHelp" placeholder="Fornavn" required>
            </div>
            <div class="form-group">
              <label>Etternavn</label>
              <input type="text" class="form-control" v-model="user.enavn" aria-describedby="enavnHelp" placeholder="Etternavn" required>
            </div>
            <div class="form-group">
              <label>Telefon</label>
              <input type="text" class="form-control" v-model="user.telefon" aria-describedby="telefonHelp" placeholder="Telefon" required>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" v-model="user.password" class="form-control" placeholder="Password" required>
            </div>
            <div class="form-group">
              <label>Verifiser Passord</label>
              <input type="password" v-model="user.password2" class="form-control" placeholder="Verifiser Passord" required>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" required>
              <label class="form-check-label"><small>Ved og godta, godtar du Halden Kommunes <a class="text-primary" href="https://www.halden.kommune.no/selvbetjening_og_skjemaer/Sider/Personvernerkl%C3%A6ring.aspx" target="_blank">personverkerklæring</a> </small></label>
            </div>
            <button v-if="!suksess" type="submit" class="btn hk-btn btn-block">Registrer deg</button>
            <button v-if="suksess" type="submit" class="btn hk-btn btn-block" disabled><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
            <div class="knapper mt-2">
              <button class="btn btn-link" style="color: rgb(0,114,187)">Avbryt</button>
            </div>
          </form>
        </b-tab>
      </b-tabs>
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

</div>
</template>

<script>
import slugify from 'slugify'
import {setTimeout} from 'timers'
import { mapActions, mapState } from 'vuex'
import firebase from '@/firebase'

export default {
  props: {
    show: Boolean,
  },
  data(){
    return{
      melding: null,
      feil: null,
      suksess: null,
      user: {
        email: '',
        password: '',
        password2: '',
        fnavn: '',
        enavn: '',
        telefon: '',
        slug: '',
      },
      bruker: {
          email: '',
          password: '',
      },
    }
  },
  methods: {
    ...mapActions('auth', ['login','register']),
    onLogin(){
      firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(user => {
          this.suksess = {message: 'Du blir logget inn'}
          setTimeout(() => (this.show = false, this.suksess = false, this.feil = false), 3000)
        }).catch(error => {
            this.feil = {message: 'Feil epost eller passord'}
        }) 
    },
    onRegister(){
      const slug = slugify(this.user.fnavn + ' ' + this.user.enavn, {
        replacement: '-',
        remove: /[$*_+~.()'"!\._@]/g,
        lower: true
      })

      if(this.user.password !== this.user.password2){
        this.feil = {message: 'Passordene er ikke like'}
        return
      }

      firebase.firestore().collection('users').doc(this.user.telefon).get()
      .then(doc => {
        if(doc.exists){
          this.feil = {message: 'Telefon nummeret finnes fra før'}
        } else {
          firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then((doc) => {
              let id = doc.user.uid
            firebase.firestore().collection('users').doc(doc.user.uid).set({
                email: this.user.email,
                fnavn: this.user.fnavn,
                enavn: this.user.enavn,
                telefon: this.user.telefon,
                isAdmin: false,
                slug: slug,
                joined: Date.now(),
                userId: id
            })
            .then(() => {
              this.suksess = {message: 'Du blir nå registrert'}
              setTimeout(() => (this.show = false, this.suksess = false, this.feil = false), 3000)
            }).catch((error) => {
              this.feil = {message: 'Det har skjedd en feil med informasjonen du har tastet inn. Vennligst prøv igjen.'}
              this.user.email = null
              this.user.password = null
              this.user.password2 = null
              this.user.telefon = null
              this.user.fnavn = null
              this.user.enavn = null
            })
          }).catch((error) => {
            this.feil = {message: 'Eposten du har tastet inn er i bruk.'}
          })
        }
      })     
    },
    showModal(tall){
        this.$refs['my-modal'+tall].show()
        this.feil = false
        this.suksess = false
    },
    resetPassord(reset){
        firebase.auth().sendPasswordResetEmail(reset.email)
        .then(() => {
            this.suksess = {message: 'En epost er blitt sendt for å tilbakestille passord'}
        }).catch(error => {
            console.log(error.message)
            this.feil = {message: 'Eposten finnes ikke eller er skrevet feil'}
        })
        setTimeout(() => (this.show = true, this.$refs['my-modal2'].hide()), 4000)
    },
  }
}
</script>