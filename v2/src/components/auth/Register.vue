<template>
    <div class="register container">
        <form @submit.prevent="register" class="card-panel">
            <h2>Registrer deg</h2>
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
                <input type="number" name="phone" v-model="phone">
            </div>
            <div class="field">
                <label for="password">Passord</label>
                <input type="password" name="password" v-model="password">
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
      password: null,
      feedback: null
    }
  },
  methods: {
    register(){
      let name = this.fname + " " + this. ename

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
          // this alias does not yet exists in the db
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(cred => {
              ref.set({
                email: this.email,
                name: this.fname +" " + this.ename,
                phone: this.phone,
                isAdmin: false,
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
          }
        })
      } else {
        this.feedback = 'Please fill in all fields'
      }
    }
  },
  created(){
    document.title = "Registrer deg"
  }
}
</script>

<style>

.register{
  max-width: 25%;
  margin-top: 40px;
}

.register h2{
  font-size: 2.4em;
}

.register .field{
  margin-bottom: 16px;
}

</style>
