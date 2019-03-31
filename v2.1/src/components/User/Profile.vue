<template>
    <v-container grid-list-md>
        <app-alert @dismissed="onDismissed" v-if="error" :text="error.message"></app-alert>
        <app-success @dismissed="onDismissed" v-if="success" :text="success.message"></app-success>
        <v-layout col>
            <v-flex>
                <h2>Bruker profil for {{user[0].name}}</h2>
                <p>email: {{user[0].email}}</p>
                <p>tlf: {{user[0].phone}}</p>
                <p>id: {{user[0].userId}}</p>
                <p>joined: {{user[0].joined}}</p>
                <p v-if="user[0].admin">Bruker er administrator</p>
                <v-btn>Tilbakestill passord</v-btn>
                <app-edit-user :user="user[0]"></app-edit-user>
            </v-flex>
        </v-layout>

        <v-layout row wrap v-if="loading">
            <v-flex xs12 class="text-xs-center">
                <v-progress-circular
                indeterminate
                color="primary"
                :width="7"
                :size="70"></v-progress-circular>
            </v-flex>
        </v-layout>

        <v-layout row wrap v-else>
            <v-flex height="350px" class="prosjekt" xs12 md4 lg2 v-for="project in projects" :key="project.id" @click="showProject(project.id)">
                <v-card >
                    <v-card-title>
                        <h3 class="primary--text" >{{project.title}}</h3>
                    </v-card-title>
                    <v-card-text>
                        <div class="info--text">{{project.date}}</div>
                        <div>{{project.content}}</div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import moment from 'moment'

export default {
    props: ['id'],
    data(){
        return{
            
        }
    },
    computed: {
        user(){
            return this.$store.getters.user 
        },
        projects(){
            return this.$store.getters.brukerProsjekter
        },
        loading(){
            return this.$store.getters.loading
        },
        error(){
            return this.$store.getters.error
        },
        success(){
            return this.$store.getters.success
        }
    },
    methods: {
        showProject(id){
            this.$router.push('/prosjekt/' + id)
        },
        onDismissed(){
            this.$store.dispatch('clearError')
        }
    }
}
</script>

<style>
.prosjekt{
    cursor: pointer;
}
</style>
