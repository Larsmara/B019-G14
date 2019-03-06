<template>
    <h2>Bruker profil for {{user.id}}</h2>
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