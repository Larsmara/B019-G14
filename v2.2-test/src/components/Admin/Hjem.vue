<template>
    <div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard - Nye innkommende forslag</h1>
      </div>

      <div class="table-responsive">
        <b-media vertical-align="center" class="border p-3 my-3 shadow-sm" v-for="project in prosjekter" :key="project.id">
            <img v-if="!project.imageUrl" src="../../assets/idea2.jpg" slot="aside" blank blank-color="#ccc" width="80" height="80" alt="placeholder" class="d-none d-sm-block" />
            <img v-else :src="project.imageUrl" slot="aside" blank blank-color="#ccc" width="80" height="80" alt="placeholder" class="d-none d-sm-block"/>

            <h5 class="mt-0 mb-1">{{project.title}}</h5>
            <p class="mb-0">{{project.content}}</p>
            <p><small class="text-muted">{{project.date}}</small></p>
            <div class="btn-group pt-2" role="group" aria-label="Basic example">
                <button type="button" class="btn hk-outline-btn">Les mer</button>
                <button type="button" class="btn btn-outline-danger" @click="slett(project)">Slett</button>
                <button type="button" class="btn hk-outline-btn" @click="updateToInternt(project, 1)">Produksjon</button>
            </div>
            <div class="btn-group pt-2" role="group">
                <button type="button" class="btn hk-outline-btn" @click="updateToInternt(project, 2)">Interne</button>
                <button type="button" class="btn hk-outline-btn" @click="updateToInternt(project, 3)">Eksterne</button>
                <button type="button" class="btn hk-outline-btn" @click="updateToInternt(project, 4)">Utvalgt</button>
            </div>
        </b-media>
      </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'

export default {
    name: 'hjem',
    data(){
        return{
            prosjekt: []
        }
    },
    computed: {
        prosjekter(){
            return this.$store.getters.adminProject
        }
    },
    methods: {
        updateToInternt(project, klasse){
            this.$store.dispatch('updateProject', {project: project, klasse: klasse})
        },
        slett(project){
            this.$store.dispatch('deleteProject', project)
        }
    }
}
</script>