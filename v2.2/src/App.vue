<template>
  <div id="app" class="bg-light">

    <b-navbar id="main-nav" toggleable="lg" type="light" fixed="top" class="shadow-sm p-3 mb-5 bg-white rounded">
      <b-navbar-brand to="/">Smart City</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item id="hjem" to="/">Home</b-nav-item>
          <b-nav-item id="ny-idé" to="/ny-idé" v-if="userIsAuthenticated && user">Send idé</b-nav-item>
          <b-nav-item id="prosjekter" to="/prosjekter">Prosjekter</b-nav-item>
          <b-nav-item id="om-oss" to="/om-oss">Om oss</b-nav-item>
          <b-nav-item @click="showDialog">Test</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item to="#" v-if="userIsAuthenticated && user">Dashboard</b-nav-item>
          <b-nav-item to="#" v-if="userIsAuthenticated && user">Min side</b-nav-item>
          
<!--           <b-button @click="modalShow = !modalShow">Logger deg inn</b-button>
 -->          <!-- <Login v-if="!userIsAuthenticated"/>
          <b-nav-item v-if="userIsAuthenticated && user" @click="onLogOut">Logg ut</b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  <dialog :show="show_dialog"></dialog>


    <div class="main-view">
    <router-view/>
  </div>
    
<!-- LOGIN MODAL -->
  <!-- <b-modal v-model="modalShow" hide-footer centered title="Smart City">
    <b-tabs content-class="mt-3" class="navbar-dark">
      <b-tab title="Logg inn" active class="text--dark">
        <b-form @submit.prevent="login">
          <b-form-group  label="E-post:">
          <b-form-input
            type="email"
            v-model="email"
            required
            placeholder="E-post" />
        </b-form-group>

        <b-form-group  label="Passord:">
          <b-form-input
            type="password"
            v-model="password"
            required
            placeholder="Passord" />
        </b-form-group>
        <div class="knapper mt-4">
        <b-button type="submit">Logg inn</b-button>
        </div>
        <div class="knapper mt-2">
          <b-button variant="link" @click="dialog2 = !dialog2">Glemt passord?</b-button>
        </div>
      </b-form>
      </b-tab>
      <b-tab title="Registrer deg"><p>I'm the second tab content</p></b-tab>
    </b-tabs>
  </b-modal>

  <b-modal v-model="dialog2" hide-footer centered title="Glemt passord">
  <b-form @submit.prevent="onSubmit">
    <b-form-group  label="E-post:">
    <b-form-input
      type="email"
      v-model="email"
      required
      placeholder="E-post" />
    </b-form-group>
    <div class="knapper mt-4">
      <b-button class="mr-2" @click="dialog2 = !dialog2">Avbryt</b-button>
    <b-button type="submit">Nullstill passord</b-button>
    </div>
  </b-form>
  </b-modal> -->
  <!-- LOGIN MODAL END -->


  </div>
</template>

<script>
import dialog from './components/Bruker/Dialog'

export default {
  data(){
    return {
      modalShow: false,
      show_dialog: false,
      dialog2: false,
      tabIndex: 0,
      email: '',
      password: ''
    }
  },
  components: {
    dialog
  },
  computed: {
    userIsAuthenticated(){
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      user(){
        return this.$store.getters.user
      }
  },
  methods: {
    onLogOut(){
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
    showDialog(){
      console.log('true')
      this.show_dialog = true
    }
  }
}
</script>


<style>


</style>

