<template>
    <v-container>
        <h2>Bruker profil for {{user[0].name}}</h2>
        <p>email: {{user[0].email}}</p>
        <p>tlf: {{user[0].phone}}</p>
        <p>id: {{user[0].userId}}</p>
        <p>joined: {{user[0].joined}}</p>
        <p v-if="user[0].admin">Bruker er administrator</p>
        <v-btn>Endre informasjon</v-btn>
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