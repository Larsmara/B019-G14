<template>
    <div class="container login">
        <form @submit.prevent="login" class="card-panel">
            <h2 class="center">Logg inn</h2>
            <div class="field">
                <label for="email">E-post</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Passord</label>
                <input type="password" name="password" v-model="password">
            </div>
            <p v-if="feedback" class="red-text center">{{feedback}}</p>
            <div class="field">
                <button class="btn">Logg inn</button>
            </div>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Login',
    props: ['feedback'],
    data(){
        return {
            email: null,
            password: null,
            feedback: null
        }
    },
    methods: {
        login(){
         if(this.email && this.password){
             firebase.auth().signInWithEmailAndPassword(this.email, this.password)
             .then(cred => {
                 console.log(cred.user)
                 this.feedback = 'Du er nå logget inn'
                 this.$router.push({name: 'Index', feedback: 'Logget inn'})
                 window.location.reload()
             }).catch(err => {
                 this.feedback = err.message
             })
             this.feedback = null
         } else {
             this.feedback = 'Please fill in both fields'
         }
        }
    },
    created(){
        document.title = "Logg inn"
    }
}
</script>

<style>

.login{
    max-width: 25%;
    margin-top: 3rem;
}

.login .field{
    margin-bottom: 1.6rem;
}

</style>
