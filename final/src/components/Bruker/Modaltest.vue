<template>
<div>
    <a @click="showModal">Logg inn / ny bruker</a>
    <b-modal ref="my-modal" class="m-0 p-0" hide-footer centered title="Smart City">
          <form>
            <div class="form-group">
              <label>E-post</label>
              <input type="email" class="form-control" v-model="user.email"  placeholder="Epost" required>
            </div>
            <div class="form-group">
              <label>Passord</label>
              <input type="password" v-model="user.password" class="form-control" placeholder="Passord">
            </div>
            <button v-if="!suksess" @click="hei" class="btn hk-btn btn-block">Logg inn</button>
            <button v-if="suksess" type="submit" class="btn hk-btn btn-block" disabled><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
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
    hei(){
        console.log('hei ' + this.user.email)
    },
    showModal() {
        this.$refs['my-modal'].show()
    },
    hideModal() {
        this.$refs['my-modal'].hide()
    },
  }
}
</script>