<template>
    <v-container grid-list-md >
        <v-layout row wrap>
            <v-flex xs4 v-for="project in projects" :key="project.id">
                <v-card>
                    <v-img
                    :src="project.imageUrl"
                    height="200px"
                    >
                    </v-img>

                    <v-card-title primary-title>
                    <div>
                        <div class="headline">{{project.title}}</div>
                        <span class="grey--text">{{project.content}}</span>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                    <v-btn flat :to="'/prosjekt/' + project.id">Les mer</v-btn>
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
        return this.$store.getters.loadedProjects
      }
    }
  }
</script>
