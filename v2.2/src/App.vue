<template>
  <div id="app">
  <b-navbar toggleable="lg" type="dark" variant="info" sticky=true class="mb-2">
    <b-navbar-brand to="/">Smart City</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/" v-if="userIsAuthenticated && user">Send idé</b-nav-item>
        <b-nav-item to="/prosjekter">Prosjekter</b-nav-item>
        <b-nav-item to="/om-oss">Om oss</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="#" v-if="userIsAuthenticated && user">Dashboard</b-nav-item>
        <b-nav-item to="#" v-if="userIsAuthenticated && user">Min side</b-nav-item>
        <Login v-if="!userIsAuthenticated"/>
        <b-nav-item to="/" v-if="userIsAuthenticated && user">Logg ut</b-nav-item>
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
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
