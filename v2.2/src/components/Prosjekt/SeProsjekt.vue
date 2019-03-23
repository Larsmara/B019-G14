<template>
    <div class="prosjekt">
        <b-container >
            <b-button variant="info" class="mt-4 mr-2" @click="goBack">Tilbake</b-button>
             <div class="card mb-4 mr-2 ml-2 mt-2">
                    <img v-if="!project.imageUrl" src="https://picsum.photos/600/300/?image=25" class="card-img-top" alt="Standard bilde">
                    <img v-if="project.imageUrl" :src="project.imageUrl" class="card-img-top" alt="Prosjekt bilde">
                    <div class="card-body">
                        <h5 class="card-title">{{project.title}}</h5>
                        <hr>
                        <p class="card-text">{{project.content}}</p>
                    </div>
                    <div class="card-footer text-muted">
                        Innsendt: {{project.date}}
                    </div>
                </div>

        </b-container>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: ['id'],
    computed: {
        project(){
            return this.$store.getters.loadedProject(this.id)
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>


<style>

</style>
