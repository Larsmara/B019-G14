<template>
    <div class="register container">
      <app-alert @dismissed="onDismissed" v-if="error" :text="error.message"></app-alert>
        <form @submit.prevent="register" class="card-panel">
            <h2 class="center">Registrer deg</h2>
            <div class="field">
                <label for="email">E-post</label>
                <input type="email" name="email" v-model="email" required>
            </div>
            <div class="field">
                <label for="fname">Fornavn</label>
                <input type="text" name="fname" v-model="fname" required>
            </div>
            <div class="field">
                <label for="ename">Etternavn</label>
                <input type="text" name="ename" v-model="ename" required>
            </div>
            <div class="field">
                <label for="phone">Telefonnummer</label>
                <input type="number" name="phone" pattern="\+[0-9\s\-\(\)]+" v-model="phone" required>
            </div>
            <div class="field">
                <label for="password">Passord</label>
                <input type="password" name="password" v-model="password" required>
            </div>
            <div class="field" >
                <label for="password">Confirm passord</label>
                <input type="password" name="password"  required>
            </div>
            <div class="field">
              <label>
                <input type="checkbox"  />
                <span>Ved å godta bla bla bla..... Lagring av persondata...</span>
              </label>
            </div>
            <div id="recaptcha-container"></div>
            <div class="field center">
                <v-btn class="btn blue" type="submit" :disabled="loading" :loading="loading">
                  Registrer deg
                  <span slot="loader" class="custom-loader"><v-icon light>cached</v-icon></span>
                  </v-btn>
            </div>
        </form>

        <!-- <form @submit.prevent="reg" class="card-panel" id="skjema2">
          <div class="field">
              <label for="ename">Kode fra SMS</label>
              <input type="text" name="smsCode" v-model="smsCode">
          </div>
          <div class="field center">
            <button class="btn blue" id="sign-in">Fullfør registreringen</button>
          </div>
        </form> -->
    </div>
</template>

<script>
import slugify from 'slugify'

export default {
    name: 'Register',
    data(){
        return{
          email: null,
          fname: null,
          ename: null,
          phone: null,
          slug: null,
          password: null,
          confirmPassord: null,
        }
    },
    computed: {
      comparePassword () {
        return this.passord !== this.confirmPassord ? 'Passwords do not match' : ''
      },
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
      register(){
        this.slug = slugify(this.fname + ' ' + this.ename, {
          replacement: '-',
          remove: /[$*_+~.()'"!\._@]/g,
          lower: true
        })

        const userData = {
          email: this.email,
          name: this.fname + ' ' + this.ename,
          phone: this.phone,
          slug: this.slug,
          joined: Date.now()
        }
        this.$store.dispatch('signUserUp', {email: this.email, passord: this.password, user: userData})
      },
      onDismissed(){
        this.$store.dispatch('clearError')
      }
    }
}
</script>

<style>

.register{
  max-width: 40%;
  margin-top: 3rem;
}

.register .field{
  margin-bottom: 1.6rem;
}

.hidden{
  display: none;
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