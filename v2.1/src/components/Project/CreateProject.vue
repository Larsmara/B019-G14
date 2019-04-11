<template>
    <div class="container new-project">
        <!-- <div class="row" v-if="tilbakemelding">
            <div class="card green accent-3">
                <h3>{{tilbakemelding}}</h3>
            </div>
        </div> -->
        <form @submit.prevent="onCreateProject" class="card-panel">
            <h2 class="center">Send oss din idé!</h2>
            <div class="field">
                <label for="title">Tittel</label>
                <input type="text" name="title" v-model="title" required>
            </div>
            <div class="field">
                <label for="content">Forklar din idé</label>
                <textarea type="text" name="content" v-model="content" class="materialize-textarea" required></textarea>
            </div>
            <div class="file-field input-field">
                <div class="btn">
                    <span>File</span>
                    <input type="file" accept="image/*" @change="onFilePicked">
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text">
                </div>
            </div>
            <div class="field" v-if="imageUrl">
                <img :src="imageUrl" height="150px">
            </div>
<!--             <p v-if="feedback" class="red-text center">{{feedback}}</p>--> 
            <div class="field">
                <button type="submit" class="btn blue" :disabled="!formIsValid">Registrer idé</button>
            </div>
        </form>
    </div>
</template>

<script>
import slugify from 'slugify'

  export default {
    name: 'CreateProject',
    data(){
      return{
        title: null,
        content: null,
        image: null,
        slug: null,
        imageUrl: null
      }
    },
    computed: {
        formIsValid(){
            return this.title !== null && this.content !== null
        }
    },
    methods: {
        onCreateProject(){
            if(!this.formIsValid){
                return
            }

            this.slug = slugify(this.title, {
                replacement: '-',
                remove: /[$*_+~.()'"!\._@]/g,
                lower: true
            })

            const projectData = {
                title: this.title,
                content: this.content,
                date: Date.now(),
                image: this.image,
                slug: this.slug
            }
            this.$store.dispatch('createProject', projectData)
            this.$router.push('/prosjekter')
        },
        onFilePicked(event){
            const files = event.target.files
            let filename = files[0].name
            if (filename.lastIndexOf('.') <= 0) {
            return alert('Please add a valid file!')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
            this.imageUrl = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.image = files[0]
        }
    }
  }
</script>

<style>
.new-project{
  max-width: 50%;
}
</style>
