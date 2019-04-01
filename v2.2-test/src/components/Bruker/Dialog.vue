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
          <form @submit.prevent="onLogin(user)">
            <div class="form-group">
              <label>E-post</label>
              <input type="text" v-model="user.email" class="form-control" placeholder="E-post">
            </div>
            <div class="form-group">
              <label>Passord</label>
              <input type="password" v-model="user.password" class="form-control" placeholder="Passord">
            </div>
            <button type="submit" class="btn hk-btn btn-block">Logg Inn</button>
            <div class="knapper mt-2">
              <button class="btn btn-link" style="color: rgb(0,114,187)">Glemt passord?</button>
            </div>
          </form>
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
              <label class="form-check-label"><small>Jeg godtar at Halden Kommune lagrer mine opplysninger.</small></label>
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
import { mapActions, mapState } from 'vuex'


export default {
  props: {
    show: Boolean,
    tabIndex: 0
  },
  data(){
    return{
      dialog2: false,
      melding: null,
      user: {
        email: '',
        password: '',
        password2: '',
        fnavn: '',
        enavn: '',
        telefon: '',
        slug: '',
      }
    }
  },
  methods: {
    ...mapActions('auth', ['login','register']),
    onLogin(){
      this.login(this.user)
      this.melding = 'Du blir logget inn..'
      setTimeout(() => (this.show = false), 2000)
    },
    onRegister(){
      this.register(this.user)
      this.melding = 'Du blir registrert'
      setTimeout(() => (this.show = false), 2000)
    }
  }
}
</script>