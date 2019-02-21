<template>
    <div class="navbar">
        <nav class="blue lighten-2">
            <div class="container">
                <!-- <router-link class="brand-logo left" :to="Index">B019-G14</router-link> -->
                <ul class="left">
                    <li><router-link :to="{name: 'Index'}">Hjem</router-link></li>
                    <li><router-link :to="{name: 'NewProject'}" v-if="user">Send idé</router-link></li>
                    <li><router-link :to="{name: 'Project'}">Prosjekter</router-link></li>
                    <li><router-link :to="{name: 'About'}">Om oss</router-link></li>
                </ul>
                <ul class="right">
                    <li><router-link :to="{name: 'Login'}" v-if="!user">Logg inn</router-link></li>
                    <li><router-link :to="{name: 'Register'}" v-if="!user">Registrer deg</router-link></li>
                    <li><router-link :to="{name: 'UserProfile'}" v-if="user">Min side</router-link></li>
                    <li><a @click="logout" v-if="user">Log ut</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Navbar',
    data(){
        return{
            user: null
        }
    },
    methods: {
        logout(){
            firebase.auth().signOut().then(() => {
                this.$router.push({name: 'Index'})
            })
        }
    },
    created(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.user = user
            } else {
                this.user = null
            }
        })
    }
}
</script>

<style>

.navbar nav{
    padding: 0 20px;
}

</style>


