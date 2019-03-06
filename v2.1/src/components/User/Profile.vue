<template>
    <v-container>
        <h2>Bruker profil for {{user.id}}</h2>
        <p>tlf: {{user.displayName}}</p>
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
        }
    }
}
</script>