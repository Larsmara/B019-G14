<template>
    <div class="container new-project">
        <div class="row" v-if="tilbakemelding">
            <div class="card green accent-3">
                <h3>{{tilbakemelding}}</h3>
            </div>
        </div>
        <form @submit.prevent="createidea" class="card-panel">
            <h2 class="center">Send oss din idé!</h2>
            <div class="field">
                <label for="title">Tittel</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div class="field">
                <label for="content">Forklar din idé</label>
                <input type="text" name="content" v-model="content">
            </div>
            <p v-if="feedback" class="red-text center">{{feedback}}</p>
            <div class="field">
                <button class="btn blue">Registrer ide</button>
            </div>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import slugify from 'slugify'

export default {
    name: 'NewProject',
    data(){
        return {
            title: null,
            content: null,
            slug: null,
            user: null,
            feedback: null,
            tilbakemelding: null
        }
    },
    created(){
        document.title = "Ny idé"
        let ref = db.collection('users')
        // Get current user
        ref.where('user_id', '==', firebase.auth().currentUser.uid).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                this.user = doc.data()
                this.user.id = doc.id
                //console.log(this.user.user_id)
            })
        })
    },
    methods: {
        createidea(){
            if(this.title && this.content){
                this.slug = slugify(this.title, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\._@]/g,
                    lower: true
                })
                console.log(this.title, this.content)
                console.log(this.user.user_id)
                this.feedback = null
                db.collection('projects').add({
                    title: this.title,
                    content: this.content,
                    img_url: null,
                    time: Date.now(),
                    user_id: this.user.user_id,
                    showing: false,
                    slug: this.slug
                }).then(() => {
                    this.title = null,
                    this.content = null
                    this.tilbakemelding = 'Din ide er registrert. Denne ideen vil bli vurdert, men vi gjør oppmerksom på at vi ikke kan realisere alle ideer, men dit innspill kan bidra til et bedre samfunn i halden.'
                }).then(() =>{
                    this.$router.push({ name: 'Project' })
                })
            } else {
                this.feedback = 'Fyll ut begge feltene'
            }
            this.tilbakemelding = null
        }
    }
}
</script>

<style>

</style>
