<template>
<div>
    <b-modal :visible="show" class="m-0 p-0" hide-footer centered title="Smart City" ref="myModalRef">
      <div v-if="melding" class="alert alert-success" role="alert">
        {{melding}}
      </div>
      <!-- Tabs with card integration -->
      <b-tabs :v-model="tabIndex" class="m-0 p-0 login-tabs">
        <!-- LOGG INN TAB -->
        <b-tab title="Logg Inn" class="pt-2">
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="exampleInputEmail1">E-post</label>
              <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" placeholder="E-post">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Passord</label>
              <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Passord">
            </div>
            <button type="submit" class="btn hk-btn btn-block">Logg Inn</button>
            <div class="knapper mt-2">
              <button class="btn btn-link" style="color: rgb(0,114,187)">Glemt passord?</button>
            </div>
          </form>
        </b-tab>
        <!-- REGISTRERINGS TAB -->
        <b-tab title="Registrer deg" class="pt-2">
          <form @submit.prevent="register">
            <div class="form-group">
              <label for="exampleInputEmail3">Epost</label>
              <input type="email" class="form-control" v-model="email" id="exampleInputEmail3"  placeholder="Epost" required>
            </div>
            <div class="form-group">
              <label for="fornavn">Fornavn</label>
              <input type="text" class="form-control" v-model="fnavn" id="fornavn" aria-describedby="fnavnHelp" placeholder="Fornavn" required>
            </div>
            <div class="form-group">
              <label for="etternavn">Etternavn</label>
              <input type="text" class="form-control" v-model="enavn" id="etternavn" aria-describedby="enavnHelp" placeholder="Etternavn" required>
            </div>
            <div class="form-group">
              <label for="telefon">Telefon</label>
              <input type="text" class="form-control" v-model="telefon" id="telefon" aria-describedby="telefonHelp" placeholder="Telefon" required>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword3">Password</label>
              <input type="password" v-model="password" class="form-control" id="exampleInputPassword3" placeholder="Password" required>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword2">Verifiser Passord</label>
              <input type="password" v-model="password2" class="form-control" id="exampleInputPassword2" placeholder="Verifiser Passord" required>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
              <label class="form-check-label" for="exampleCheck1"><small>Jeg godtar at Halden Kommune lagrer mine opplysninger.</small></label>
            </div>
            <button type="submit" class="btn hk-btn btn-block">Registrer deg</button>
            <div class="knapper mt-2">
              <button class="btn btn-link" style="color: rgb(0,114,187)">Avbryt</button>
            </div>
          </form>
        </b-tab>
      </b-tabs>
    </b-modal>
</div>
</template>

<script>
import slugify from 'slugify'
import {setTimeout} from 'timers'

export default {
  props: {
    show: Boolean,
    tabIndex: 0
  },
  data(){
    return{
      dialog2: false,
      email: null,
      fnavn: null,
      enavn: null,
      telefon: null,
      password: null,
      password2: null,
      slug: null,
      melding: null,
    }
  },
  methods: {
    login(){
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      this.melding = 'Du blir logget inn..'
      setTimeout(() => (this.show = false), 2000)
      
    },
    register(){
      if(this.password !== this.password2){
        return
      }

      this.slug = slugify(this.fnavn + ' ' + this.enavn, {
        replacement: '-',
        remove: /[$*_+~.()'"!\._@]/g,
        lower: true
        })

        const userData = {
            email: this.email,
            name: this.fnavn + ' ' + this.enavn,
            phone: this.telefon,
            slug: this.slug,
            gdpr: this.personvern,
            joined: Date.now()
        }
        this.$store.dispatch('signUserUp', {email: this.email, passord: this.password, user: userData})
        this.$refs.myModalRef.hide()
    }
  }
}
</script>