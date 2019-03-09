<template>
<div class="admin">
  <v-navigation-drawer class="sidebar"
      v-model="drawer"
      :mini-variant.sync="mini"
      hide-overlay
      stateless
    >
      <v-toolbar flat class="">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-icon>code</v-icon>
            </v-list-tile-avatar>
  
            <v-list-tile-content>
              <v-list-tile-title>Administrator</v-list-tile-title>
            </v-list-tile-content>
  
            <v-list-tile-action>
              <v-btn
                icon
                @click.stop="mini = !mini"
              >
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
  
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
  
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
  
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>  

  <main class="admin-content">
    <router-view/>
  </main>

</div>    
</template>

<script>
import AdminNav from '../components/Admin/AdminNav'

  export default {
    name: 'AdminNav',
    components: {
      AdminNav
    },
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard', link: '/dashboard/home'},
          { title: 'Interne', icon: 'question_answer', link: '/dashboard/interne' },
          { title: 'Eksterne', icon: 'question_answer', link: '/dashboard/eksterne' },
        ],
        mini: true,
        right: null
      }
    },
    created(){
      document.title = 'Dashboard'
    }
  }
</script>

<style>
.admin-content{
  display: inline-block;
    width: 100%;
    padding-left: 100px;
    padding-top: 20px;
    -webkit-transition: padding-left .3s ease;
    transition: padding-left .3s ease; 
}
.sidebar{
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
