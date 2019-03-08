<template>
    <div class="navbar">
        <nav class="blue lighten-2">
            <div class="nav-wrapper">
                <router-link :to="{name: 'Index'}" class="brand-logo left"><!-- <img src="../images/smartcity-tekst.png" alt="Smart City Halden" /> -->Smart City Halden</router-link>
                <div class="container">
                    <ul class="left hide-on-med-and-down" id="nav-mobile">
                        <li><router-link :to="{name: 'Index'}">Hjem</router-link></li>
                        <li><router-link :to="{name: 'NewProject'}" v-if="user">Send idé</router-link></li>
                        <li><router-link :to="{name: 'Project'}">Prosjekter</router-link></li>
                        <li><router-link :to="{name: 'About'}">Om oss</router-link></li>
                    </ul>
                    <ul class="right hide-on-med-and-down" id="nav-mobile">
                        <li><router-link :to="{name: 'Login'}" v-if="!user">Logg inn</router-link></li>
                        <li><router-link :to="{name: 'Register'}" v-if="!user">Registrer deg</router-link></li>
                        <li><router-link :to="{name: 'Dashboard'}" v-if="user && user.isAdmin">Dashboard</router-link></li>
                        <li><router-link :to="{name: 'UserProfile', params: {id: user.slug}}" v-if="user">Min side</router-link></li>
                        <li><a @click="logout" v-if="user">Logg ut</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'

export default {
    name: 'Navbar',
    data(){
        return{
            user: null,
            admin: null,
            user_id: null
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
                this.admin = user.isAdmin
                this.slug = user.slug
            } else {
                this.user = null
            }
        })

        let ref = db.collection('users')

        //get current user
        ref.where('userId', '==', firebase.auth().currentUser.uid).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.data())
                this.user = doc.data()
            })
        })
    }
}

</script>

<style>

.navbar nav{
    padding: 0 2rem;
}

.navbar .container .left:first-child {
    padding: 0 3rem;
}

.navbar img {
    height: 6.4rem;
}

ul li a {
    font-size: 1.6rem;
}

</style>
