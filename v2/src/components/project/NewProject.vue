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
                <textarea type="text" name="content" v-model="content" class="materialize-textarea"></textarea>
            </div>
            <div class="file-field input-field">
                <div class="btn">
                    <span>File</span>
                    <input type="file">
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text">
                </div>
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
            selectedFile: null,
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
                console.log(this.user)
            })
        })

        var storage = db.storage()
        var storRef = storage.ref("photos/")

        var file = "Screenshot 2019-02-01 at 18.05.32.png"
        storRef.put(file).then(snapshot =>{
            console.log("uploaded")
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
                    this.tilbakemelding = 'Din ide er registrert. Denne ideen vil bli vurdert, men vi gjør oppmerksom på at vi ikke kan realisere alle ideer. Ditt innspill kan bidra til et bedre samfunn i Halden.'
                }).then(() =>{
                    this.$router.push({ name: 'Project' })
                })
            } else {
                this.feedback = 'Fyll ut begge feltene'
            }
            this.tilbakemelding = null
        }
        /* onFileSelected(event){
            let file = event.target.files[0]
            this.selectedFile = event.target.files[0]
            let storageRef = firebase.storeage().ref('photos/' + file.name)

            var task = storageRef.put(file)
            console.log(event)
        } */
    }
}
</script>


<style>

.new-project {
  max-width: 50%;
  margin-top: 40px;
}

</style>
