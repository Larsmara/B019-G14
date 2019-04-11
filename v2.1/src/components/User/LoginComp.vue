<template>
<div>
    <v-dialog width="500px" v-model="loginComp">
        <!-- <v-btn slot="activator" class="primary login-btn" flat>
        <v-icon>lock_open</v-icon>
        Logg inn / registrer deg
        </v-btn> -->
        <a slot="activator" flat>Logg inn / registrer deg</a>
    <v-card>
        <v-container>
        <v-layout row wrap>
            <v-flex s12>
                <v-card-title >Halden - Smart City</v-card-title>
            </v-flex>
        </v-layout>
        
        <v-tabs v-model="active" slider-color="primary" >
          <v-tab  ripple >
            Logg inn
          </v-tab>
          <v-tab :key="2" ripple >
            Registrer deg
          </v-tab>

          <v-tab-item >
            <v-card flat>
              <v-card-text>
                <form @submit.prevent="login">
                <div class="field">
                    <label for="email">E-post</label>
                    <input type="email" name="email" v-model="email" required>
                </div>
                <div class="field">
                    <label for="password">Passord</label>
                    <input type="password" name="password" v-model="password" required>
                </div>
                <div class="field center">
                    <v-btn class="btn primary" large type="submit" :disabled="loading" :loading="loading">
                    Logg inn
                    <span slot="loader" class="custom-loader"><v-icon light>cached</v-icon></span>
                    </v-btn>
                </div>
                <div class="field center mt-2">
                    <a @click="dialog2 = !dialog2">Glemt passord?</a>
                </div>
                </form>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item :key="2" >
            <v-card flat>
              <v-card-text>
                    <form @submit.prevent="register">
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
                            <input type="checkbox" v-model="personvern" required/>
                            <span>Ved å godta bla bla bla..... Lagring av persondata...</span>
                        </label>
                        </div>
                        <div id="recaptcha-container"></div>
                        <div class="field center">
                            <v-btn class="primary" @click="loginComp = false">Avbryt</v-btn>
                            <v-btn class="btn primary" type="submit" :disabled="loading" :loading="loading">
                            Registrer deg
                            <span slot="loader" class="custom-loader"><v-icon light>cached</v-icon></span>
                            </v-btn>
                        </div>
                    </form>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
    </v-container>
    </v-card>
</v-dialog>

<v-dialog v-model="dialog2" max-width="500px">
    <div class="container">
    <v-card>
        <v-container>
        <v-card-title>
        Nullstill passord
        </v-card-title>

         <v-alert type="success" dismissible :value="true" v-if="feedback">
            {{ feedback }}
        </v-alert>

        <v-card-text>
            <form @submit.prevent="glemtPassord">
                <div class="field">
                    <label for="email">E-post</label>
                    <input type="email" name="email" v-model="emailReset" >
                </div>
                <div class="field center">
                    <v-btn class="btn primary" large type="submit" :disabled="loading" :loading="loading">
                    Reset passord
                    <span slot="loader" class="custom-loader"><v-icon light>cached</v-icon></span>
                    </v-btn>
                </div>
            </form>
        </v-card-text>
        <v-card-actions>
        <v-btn color="primary" flat @click="dialog2=false">Avbryt</v-btn>
        </v-card-actions>
        </v-container>
    </v-card>
    </div>
</v-dialog>

</div>
</template>

<script>
import slugify from 'slugify'
import firebase from 'firebase'
import { setTimeout } from 'timers';

export default {
    name: 'Login',
    data(){
        return{
            loginComp: false,
            active: null,
            dialog2: false,
            loginDialog: false,
            registerDialog: false,
            personvern: false,
            email: null,
            fname: null,
            ename: null,
            phone: null,
            slug: null,
            password: null,
            confirmPassord: null,
            emailReset: null,
            feedback: null,
        }
    },
    computed: {
        loading(){
            return this.$store.getters.loading
        },
        error(){
            return this.$store.getters.error
        },
        user(){
            return this.$store.getters.user
        }
    },
    methods: {
        login(){      
            this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
        },
        loginDialog(){
            registerDialog = false
            loginDialog = true
        },
        registerDialog(){
            loginDialog = false
            registerDialog = true
        },
        onDismissed(){
            this.$store.dispatch('clearError')
        },
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
                gdpr: this.personvern,
                joined: Date.now()
            }
            this.$store.dispatch('signUserUp', {email: this.email, passord: this.password, user: userData})
        },
        glemtPassord(){
            console.log('Glemt passord')
            console.log(this.emailReset)
            let melding = this.feedback
            firebase.auth().sendPasswordResetEmail(this.emailReset).then(() => {
                console.log('Sendt')
                this.feedback = 'En epost er sendt'
            }).catch(error => {
                this.feedback = error.message
            })
            setTimeout(() => (this.dialog2 = false), 4000)
        }
    },
    watch: {
        user(value){
            if(value !== null && value !== undefined){
            //this.$router.push('/')
            }
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