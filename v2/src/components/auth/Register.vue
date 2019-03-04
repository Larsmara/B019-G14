<template>
    <div class="register container">
        <form @submit.prevent="register" class="card-panel">
            <h2 class="center">Registrer deg</h2>
            <div class="field">
                <label for="email">E-post</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="fname">Fornavn</label>
                <input type="text" name="fname" v-model="fname">
            </div>
            <div class="field">
                <label for="ename">Etternavn</label>
                <input type="text" name="ename" v-model="ename">
            </div>
            <div class="field">
                <label for="phone">Telefonnummer</label>
                <input type="number" name="phone" pattern="\+[0-9\s\-\(\)]+" v-model="phone">
            </div>
            <div class="field">
                <label for="password">Passord</label>
                <input type="password" name="password" v-model="password">
            </div>
            <div class="field">
              <label>
                <input type="checkbox" v-model="gdpr" />
                <span>Ved å godta bla bla bla..... Lagring av persondata...</span>
              </label>
            </div>
            <div id="recaptcha-container"></div>
            <p class="red-text center" v-if="feedback">{{feedback}}</p>
            <div class="field center">
                <button class="btn blue">Verifiser telefon</button>
            </div>
        </form>

        <form @submit.prevent="reg" class="card-panel" id="skjema2">
          <div class="field">
              <label for="ename">Kode fra SMS</label>
              <input type="text" name="smsCode" v-model="smsCode">
          </div>
          <p class="red-text center" v-if="feedback">{{feedback}}</p>
          <div class="field center">
            <button class="btn blue" id="sign-in">Fullfør registreringen</button>
          </div>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import slugify from 'slugify'

export default {
  name: 'Register',
  data(){
    return{
      email: null,
      fname: null,
      ename: null,
      name: null,
      phone: null,
      slug: null,
      gdpr: false,
      password: null,
      smsCode: null,
      feedback: null
    }
  },
  methods: {
    register(){
      if(this.email && this.fname && this.ename && this.phone && this.password){
          this.slug = slugify(this.fname + ' ' + this.ename, {
              replacement: '-',
              remove: /[$*_+~.()'"!\._@]/g,
              lower: true
          })
        let ref = db.collection('users').doc(this.phone)
        ref.get().then(doc => {
          if(doc.exists){
            this.feedback = 'Dette telefonnummeret finnes'
          } else {
            var appVerifier = window.recaptchaVerifier;
            firebase.auth().signInWithPhoneNumber('+47'+this.phone, appVerifier)
            .then(function (confirmationResult) {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              window.signingIn = false;  
              document.getElementById('skjema').style.display = 'none';   
              document.getElementById('skjema2').style.display = 'block';         
            }).catch(function (error) {
              // Error; SMS not sent
              console.error('Error during signInWithPhoneNumber', error);
              window.alert('Error during signInWithPhoneNumber:\n\n'
                  + error.code + '\n\n' + error.message);
              window.signingIn = false;
            });
            
          }
        })
      } else {
        this.feedback = 'Please fill in all fields'
      }
      
    },
    reg(){
      let ref = db.collection('users').doc(this.phone)
      if(this.smsCode){
        confirmationResult.confirm(this.smsCode).then(result => {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            ref.set({
              email: this.email,
              name: this.fname +" " + this.ename,
              phone: this.phone,
              isAdmin: false,
              verified: true,
              timestamp: Date.now(),
              slug: this.slug,
              user_id: cred.user.uid
            })
          }).then(() => {
            this.$router.push({ name: 'Index' })
          })
          .catch(err => {
            this.feedback = err.message
          })
        })
      }
    },
    updateUi(){
      document.getElementById('skjema').style.display = 'none';
    }
  },
  created(){
    document.title = "Registrer deg"

    jQuery(document).ready(function(){
      $('#skjema2').addClass('hidden');

      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': function(response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          register();
        }
      });

      recaptchaVerifier.render().then(function(widgetId) {
        window.recaptchaWidgetId = widgetId;
        
      });
      
    });
  }
}
</script>

<style>

.register{
  max-width: 25%;
  margin-top: 3rem;
}

.register .field{
  margin-bottom: 1.6rem;
}

.hidden{
  display: none;
}

</style>
