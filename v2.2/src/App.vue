<template>
  <div id="app">
  <b-navbar toggleable="lg"  sticky class="nav-farge">
    <b-navbar-brand to="/">Smart City</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/ny-idé" v-if="userIsAuthenticated && user">Send idé</b-nav-item>
        <b-nav-item to="/prosjekter">Prosjekter</b-nav-item>
        <b-nav-item to="/om-oss">Om oss</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="#" v-if="userIsAuthenticated && user">Dashboard</b-nav-item>
        <b-nav-item to="#" v-if="userIsAuthenticated && user">Min side</b-nav-item>
        <Login v-if="!userIsAuthenticated"/>
        <b-nav-item v-if="userIsAuthenticated && user" @click="onLogOut">Logg ut</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

    <router-view/>
  </div>
</template>

<script>
import Login from './components/Bruker/LoginComp'
export default {
  data(){
    return {

    }
  },
  components: {
    Login
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
    }
  }
}
</script>


<style>

.nav-farge{
  background-color: rgba(0, 94, 184, 0.2);
}

#app .btn{
  background-color: rgb(0, 114, 187);
}

</style>

