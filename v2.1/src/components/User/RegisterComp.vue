<template>
    <v-dialog width="500px" v-model="registerDialog">
      <v-btn slot="activator" class="primary login-btn" flat>
            <v-icon>lock_open</v-icon>
            Register
        </v-btn>
        <v-card>
          <v-container>
        

        <v-layout row wrap>
            <v-flex s12>
                <v-card-title >Halden - Smart City</v-card-title>
            </v-flex>
        </v-layout>
        
        <v-tabs v-model="active" slider-color="primary" >
          <v-tab :key="1" ripple >
            Logg inn
          </v-tab>
          <v-tab :key="2" ripple >
            Registrer deg
          </v-tab>

          <v-tab-item :key="1" >
            <v-card flat>
              <v-card-text>
                <div class="field">
                    <label for="email">E-post</label>
                    <input type="email" name="email" v-model="email" required>
                </div>
                <div class="field">
                    <label for="password">Passord</label>
                    <input type="password" name="password" v-model="password" required>
                </div>
                <div class="field center">
                    <v-btn class="btn primary" @click="editDialog = false" :disabled="loading" :loading="loading">
                    Glemt passord?
                    <span slot="loader" class="custom-loader"><v-icon light>cached</v-icon></span>
                    </v-btn>

                    <v-btn class="btn primary" @click="login" :disabled="loading" :loading="loading">
                    Logg inn
                    <span slot="loader" class="custom-loader"><v-icon light>cached</v-icon></span>
                    </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item :key="2" >
            <v-card flat>
              <v-card-text>
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
                    <v-btn class="primary" @click="registerDialog = false">Avbryt</v-btn>
                    <v-btn class="btn primary" type="submit" :disabled="loading" :loading="loading">
                    Registrer deg
                    <span slot="loader" class="custom-loader"><v-icon light>cached</v-icon></span>
                    </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
</v-container>
        </v-card>
    </v-dialog>
</template>

<script>
import slugify from 'slugify'

export default {
    name: 'Register',
    data(){
        return{
            registerDialog: false,
            model: 'tab-2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    }
}
</script>

<style>


</style>