<template>
    <v-container grid-list-md >
      <h2>Eksterne Prosjekter</h2>
        <v-layout row wrap>
            <v-flex height="350px" xs12 md4 lg4 v-for="project in projects" :key="project.id">
                <v-card >
                    
                    <v-card-title primary-title>
                    <div>
                        <div class="headline">{{project.title}}</div>
                        <span v-if="project.content.length < 100" class="grey--text">{{project.content}}</span>
                        <span v-if="project.content.length >= 100" class="grey--text">{{project.content.substring(0,100)}}</span>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                      <v-btn bottom flat :to="'/prosjekt/' + project.id" class="blue">Les mer</v-btn>
                      <v-btn bottom flat class="red">Slett</v-btn>
                    </v-card-actions>
                    <v-card-actions>
                      <v-btn bottom flat class="brown">Interne</v-btn>
                      <v-btn bottom flat class="yellow">Utvalgt</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    name: 'Eksterne',
    data () {
      return {
        
      }
    },
    created(){
        document.title = 'Eksterne prosjekter'
    },
    computed: {
      projects () {
        return this.$store.getters.eksterneProsjekter
      }
    }
  }
</script>
