<template>
  <v-app id="navbar">
    <!-- MOBIL NAVIGASJON -->
    <v-navigation-drawer v-model="drawer" fixed right app temporary class="hidden-sm-and-up">
      <v-list dense>

        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- SLUTT MOBIL NAVIGASJON -->

    <v-toolbar color="cyan" dark fixed app>
      <v-toolbar-title>Smart City</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
        <v-icon left dark>{{item.icon}}</v-icon>
        {{item.title}}
        </v-btn>
        <v-btn flat v-if="userIsAuthenticated" @click="onLogOut">
        <v-icon left dark>exit_to_app</v-icon>
        Log Out
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    },
    computed: {
      menuItems(){
        let menuItems = [
          {icon: 'home', title: 'Hjem', link: '/home'},
          {icon: 'input', title: 'Send idé', link: '/prosjekter/ny'},
          {icon: 'list', title: 'Prosjekter', link: '/prosjekter'},
          {icon: 'supervisor_account', title: 'Om oss', link: '/om-oss'},
          {icon: 'account_box', title: 'Min Side', link: '/profil'},
          {icon: 'lock_open', title: 'Logg inn', link: '/login'},
          {icon: 'face', title: 'Registrer deg', link: '/register'}
        ]
        return menuItems
      }
    }
  }
</script>