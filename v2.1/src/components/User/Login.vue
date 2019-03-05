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
                <button class="btn blue">Logg inn</button>
                <button class="btn blue reset" @click="forgotPassword">Glemt passord?</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{

        }
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

.reset{
    margin-left: 5px;
}

</style>