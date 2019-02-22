<template>
    <div class="project-show">
        <h2>Viser et spesifikt prosjekt</h2>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
    name: 'ProjectShow',
    data(){
        return {
            project: null
        }
    },
    created(){
        // comments
        db.collection('projects').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                console.log(doc.data())
            })
        })
    }
}
</script>

<style>

</style>
