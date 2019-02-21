<template>
    <div class="container register">
        <form class="card-panel">
            <h2>Registrer deg</h2>
            <div class="field">
                <label for="email">E-post</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="name">Fult navn</label>
                <input type="text" name="name" v-model="name">
            </div>
            <div class="field">
                <label for="phone">Telefon nummer</label>
                <input type="number" name="phone" v-model="phone">
            </div>
            <div class="field">
                <label for="password">Passord</label>
                <input type="password" name="password" v-model="email">
            </div>
            <p class="red-text center" v-if="feedback">{{feedback}}</p>
            <div class="field center">
                <button class="btn blue">Registrer deg</button>
            </div>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
    name: 'Register',
    data(){
        return {
            email: null,
            name: null,
            phone: null,
            feedback: null
        }
    }
}
</script>

<style>

.register{
    max-width: 400px;
    margin-top: 60px;
}

.register h2{
    font-size: 2.4em;
}

.register .field{
    margin-bottom: 16px;
}

</style>
