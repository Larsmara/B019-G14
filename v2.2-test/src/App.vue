<template>
  <div id="app" class="bg-light">

    <b-navbar id="main-nav" toggleable="lg" type="light" fixed="top" class="shadow-sm p-3  bg-white rounded">
      <b-navbar-brand to="/">
      <img src="./assets/smart-city-logo.png" class="d-inline-block align-top avatar" alt="BV" />
      
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item id="hjem" to="/">Hjem</b-nav-item>
          <b-nav-item id="ny-idé" to="/ny-idé" v-if="isLoggedIn">Send idé</b-nav-item>
          <b-nav-item id="prosjekter" to="/prosjekter">Prosjekter</b-nav-item>
          <b-nav-item id="om-oss" to="/om-oss">Om oss</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item id="dashbord" to="/admin/dashbord/hjem" v-if="isLoggedIn && user.admin"><small id="notification">{{newProjects.length}}</small> Dashboard</b-nav-item>
          <b-nav-item id="minSide" :to="'/profil/' + user.slug " v-if="isLoggedIn && user">Min side</b-nav-item>
          <b-nav-item v-if="!isLoggedIn" @click="show_dialog = !show_dialog, tab=0">Logg Inn</b-nav-item>
          <b-nav-item v-if="!isLoggedIn" @click="show_dialog = !show_dialog, tab=1">Registrer deg</b-nav-item>
          
          <b-nav-item v-if="isLoggedIn" @click="onLogout">Logg ut</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  <testDialog :show="show_dialog" :tabIndex="tab"></testDialog> 
  
    <main>
      <div class="main-view bg-light">
        <router-view/>
      </div>
    </main>

  </div>
</template>

<script>
import testDialog from './components/Bruker/Dialog'
import { mapActions, mapState } from 'vuex'
import firebase from '@/firebase'

export default {
  data(){
    return {
      show_dialog: false,
      dialog2: false,
      tab: null,
      tabIndex: 0,
      email: '',
      password: '',
      newProjects: [],
    }
  },
  components: {
    testDialog
  },
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: {
    ...mapActions('auth', ['login', 'logout']),
    onLogout(){
      this.logout()
      setTimeout(() => (this.$router.push('/')), 500)
    }
  },
  created(){
    let change = []
    /* VISER NYE PROSJEKTER SOM EN NOTIFICATION VED SIDEN AV DASHBORD I NAV BAREN */
    firebase.firestore().collection('projects').where('kategori', '==', null)
    .onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if(change.type === 'added'){
          this.newProjects.push(change.doc.data())
        }
      })
    })
  }
}
</script>


<style>
.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30px;
}

</style>

