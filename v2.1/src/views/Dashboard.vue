<template>
  <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      hide-overlay
      stateless
    >
      <v-toolbar flat class="transparent">
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

    
</template>

<script>
  export default {
    name: 'AdminNav',
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard', link: '/dashboard'},
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
