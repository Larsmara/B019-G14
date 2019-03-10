<template>
    <v-container grid-list-md >
        <v-layout row wrap class="mb-2">
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="" class="primary">Prosjekter i produksjon</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router to="" class="primary">Utvalgte prosjekter</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex height="350px" xs12 md4 lg2 v-for="project in projects" :key="project.id">
                <v-card>
                    <v-img v-if="project.imageUrl"
                    :src="project.imageUrl"
                    height="200px"
                    >
                    </v-img>
                    <v-img v-if="!project.imageUrl"
                    src="https://canadianinnovationspace.ca/wp-content/uploads/2018/05/IDeA_Graphic.jpg">
                        
                    </v-img>

                    <v-card-title primary-title>
                    <div>
                        <div class="headline">{{project.title}}</div>
                        <span class="grey--text">{{project.content}}</span>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                    <v-btn bottom flat :to="'/prosjekt/' + project.id">Les mer</v-btn>
                    </v-card-actions>

                    <v-slide-y-transition>
                    </v-slide-y-transition>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    computed: {
      projects () {
        return this.$store.getters.utvalgteProsjekter
      }
    }
  }
</script>
