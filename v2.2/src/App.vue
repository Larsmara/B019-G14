<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" sticky="true">
    <b-navbar-brand href="/">Smart City</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="#">Prosjekter</b-nav-item>
        <b-nav-item href="/about">Om oss</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/">Logg inn</b-nav-item>
        <b-nav-item href="/">Logg ut</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

    <router-view/>
  </div>
</template>



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
