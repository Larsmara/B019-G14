<template>
    <v-container grid-list-md>
        <v-layout col>
            <v-flex>
                <h2>Bruker profil for {{user[0].name}}</h2>
                <p>email: {{user[0].email}}</p>
                <p>tlf: {{user[0].phone}}</p>
                <p>id: {{user[0].userId}}</p>
                <p>joined: {{user[0].joined}}</p>
                <p v-if="user[0].admin">Bruker er administrator</p>
                <v-btn>Tilbakestill passord</v-btn>
                <v-btn>Endre informasjon</v-btn>
            </v-flex>
        </v-layout>

        <v-layout row wrap >
            <v-flex height="350px" xs12 md4 lg2 v-for="project in projects" :key="project.id">
                <v-card >
                    <v-card-title>
                        <h3 class="primary--text">{{project.title}}</h3>
                    </v-card-title>
                    <!-- <v-img v-if="project.imageUrl"
                        :src="project.imageUrl"
                        height="400px"
                    ></v-img>
                    <v-img v-if="!project.imageUrl"
                    src="https://canadianinnovationspace.ca/wp-content/uploads/2018/05/IDeA_Graphic.jpg"
                    height="400px">
                    </v-img> -->
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
        }
    }
}
</script>