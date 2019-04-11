<template>
    <v-dialog width="400px" v-model="editDialog">
        
        <v-btn slot="activator">
            <v-icon>edit</v-icon>
            Endre informasjon
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex s12>
                        <v-card-title>Endre brukerinformasjon</v-card-title>
                    </v-flex>
                </v-layout>
                
                <app-alert @dismissed="onDismissed" v-if="error" :text="error.message"></app-alert>

                <v-divider></v-divider>             
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-text>
                            <div class="field">
                                <label for="email">Ny e-post</label>
                                <input type="email" name="email" v-model="email" required>
                            </div>
                            <div class="field">
                                <label for="phone">Nytt telefonnummer</label>
                                <input type="number" name="phone" pattern="\+[0-9\s\-\(\)]+" v-model="phone" required>
                            </div>
                            <div class="field center">
                                <v-btn class="btn primary" @click="editDialog = false" :disabled="loading" :loading="loading">
                                Avslutt
                                <span slot="loader" class="custom-loader"><v-icon light>cached</v-icon></span>
                                </v-btn>

                                <v-btn class="btn primary" @click="onSave" :disabled="loading" :loading="loading">
                                Oppdater
                                <span slot="loader" class="custom-loader"><v-icon light>cached</v-icon></span>
                                </v-btn>
                            </div>
                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>

export default {
    props: ['user'],
    data(){
        return{
            editDialog: false,
            email: this.user.email,
            phone: this.user.phone
        }
    },
    computed: {
        loading(){
            return this.$store.getters.loading
        },
        error(){
            return this.$store.getters.error
        }
    },
    methods: {
        onSave(){
            if(this.email.trim() === '' || this.phone.trim() === '' ){
                return
            }
            console.log(this.user)
            this.$store.dispatch('updateUser', {userId: this.user.userId, email: this.email, phone: this.phone})
            this.editDialog = false
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