<template>
  <v-app id="navbar">

    <!-- MOBIL NAVIGASJON -->
    <v-navigation-drawer v-model="drawer" fixed right app temporary class="hidden-md-and-up">
      <v-list dense>

        <v-list-tile
          v-for="item in menuItemsLeft"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="!userIsAuthenticated" class="login-dialog">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title ><login/></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="userIsAuthenticated && user[0].admin" to="/dashboard">
          <v-list-tile-action>
            <v-icon>assignment</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="userIsAuthenticated" :to="'/profil/' + user[0].slug">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Min side</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="userIsAuthenticated" @click="onLogOut">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logg ut</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <!-- SLUTT MOBIL NAVIGASJON -->

    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-title class="mr-2">
        <router-link to="/" tag="span" style="cursor: pointer">Smart City</router-link>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menuItemsLeft" :key="item.title" :to="item.link">
        <v-icon left dark>{{item.icon}}</v-icon>
        {{item.title}}
        </v-btn>
        
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        
        <v-btn flat v-for="itm in menuItemsRight" :key="itm.title" :to="itm.link">
        <v-icon left dark>{{itm.icon}}</v-icon>
        {{itm.title}}
        </v-btn>
        <v-btn flat v-if="userIsAuthenticated && user[0].admin" to="/dashboard/home">
        <v-icon left dark>assignment</v-icon>
        Dashboard
        </v-btn>
        <v-btn flat v-if="userIsAuthenticated && user" :to="'/profil/' + user[0].slug">
        <v-icon left dark>account_box</v-icon>
        Min Side
        </v-btn>

        <v-btn flat v-if="!userIsAuthenticated">
        <v-icon left dark>account_box</v-icon>
        <login/>
        </v-btn>

        <v-btn flat v-if="userIsAuthenticated" @click="onLogOut">
        <v-icon left dark>exit_to_app</v-icon>
        Log Out
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
    </v-toolbar>

   
    
    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import login from './components/User/LoginComp'
  export default {
    data: () => ({
      drawer: null,
    }),
    components: {
      login
    },
    methods: {
      onLogOut(){
        this.$store.dispatch('logout')
        this.$router.push('/')
      }
    },
    computed: {
      menuItemsLeft(){
        let menuItemsLeft = [
          {icon: 'home', title: 'Hjem', link: '/'},
          {icon: 'list', title: 'Prosjekter', link: '/prosjekter'},
          {icon: 'supervisor_account', title: 'Om oss', link: '/om-oss'},
        ]
        if(this.userIsAuthenticated){
          menuItemsLeft = [
            {icon: 'home', title: 'Hjem', link: '/'},
            {icon: 'input', title: 'Send idé', link: '/ny-idé'},
            {icon: 'list', title: 'Prosjekter', link: '/prosjekter'},
            {icon: 'supervisor_account', title: 'Om oss', link: '/om-oss'},
          ]
        }
        return menuItemsLeft
      },
      menuItemsRight(){
        let menuItemsRight = [
        ]
        if(this.userIsAuthenticated){
          menuItemsRight = []
        }
        return menuItemsRight
      },
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

.login-dialog a {
  color: black;
}

</style>
