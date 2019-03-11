<template>
    <div class="container login">
      <app-alert @dismissed="onDismissed" v-if="error" :text="error.message"></app-alert>
        <form @submit.prevent="login" class="card-panel">
            <h2 class="center">Logg inn</h2>
            <div class="field">
                <label for="email">E-post</label>
                <input type="email" name="email" v-model="email" required>
            </div>
            <div class="field">
                <label for="password">Passord</label>
                <input type="password" name="password" v-model="password" required>
            </div>
            <div class="field">
                <v-btn class="btn blue" type="submit" :disabled="loading" :loading="loading">
                  Logg inn
                  <span slot="loader" class="custom-loader"><v-icon light>cached</v-icon></span>
                  </v-btn>
<!--                 <button class="btn blue reset" @click="forgotPassword">Glemt passord?</button>
 -->            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    computed: {
      user(){
        return this.$store.getters.user
      },
      error(){
        return this.$store.getters.error
      },
      loading(){
        return this.$store.getters.loading
      }
    },
    watch: {
      user(value){
        if(value !== null && value !== undefined){
          this.$router.push('/')
        }
      }
    },
    methods: {
      login(){
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      onDismissed(){
        this.$store.dispatch('clearError')
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

.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>