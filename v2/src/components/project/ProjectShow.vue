<template>
    <div class="project-show">
        <h2>Viser et spesifikt prosjekt</h2>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import Project from './Project'

export default {
    name: 'ProjectShow',
    data(){
        return {
            project: null
        }
    },
    created(){
        // comments
        console.log($route.params.id)
    }
}
</script>

<style>

</style>
