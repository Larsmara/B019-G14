<template>
    <v-container class="visProsjekt">

        <v-layout row wrap>
            <v-btn @click="goBack" class="primary">Tilbake</v-btn>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h3 class="primary--text">{{project.title}}</h3>
                    </v-card-title>
                    <v-img v-if="project.imageUrl"
                        :src="project.imageUrl"
                        height="400px"
                    ></v-img>
                    <v-img v-if="!project.imageUrl"
                    src="https://canadianinnovationspace.ca/wp-content/uploads/2018/05/IDeA_Graphic.jpg"
                    height="400px">
                    </v-img>
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
    computed: {
        project(){
            return this.$store.getters.loadedProject(this.id)
        },
        loading(){
            return this.$store.getters.loading
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.visProsjekt{
    max-width: 70%;
}
</style>
