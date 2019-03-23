<template>
  <div class="container mt-4 ">
      <h1 class="text-center">Send oss din idé!</h1>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="exampleInputGroup1"
        label="Tittel:"
        label-for="exampleInput1"
      >
        <b-form-input
          id="exampleInput1"
          type="text"
          v-model="title"
          placeholder="Tittel" />
      </b-form-group>

      <b-form-group label="Bildefil:">
          <b-form-file
            v-model="file"
            accept="image/*"
            :state="Boolean(file)"
            placeholder="Trykk her for å velge fil"
            drop-placeholder="Drop file here..."
            @change="onFilePicked"
            />
            <div class="mt-3">Valgt fil: {{ file ? file.name : '' }}</div>

            <div class="field" v-if="imageUrl">
                <img :src="imageUrl" height="150px">
            </div>

      </b-form-group>

      <b-form-group id="exampleInputGroup2" label="Forklar din idé:" label-for="exampleInput2">
          <b-form-textarea
            id="textarea"
            v-model="content"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
        />
      </b-form-group>

      <b-button type="submit" variant="info" class="mb-2 mr-2">Registrer idé</b-button>
      <b-button @click="reset" variant="danger" id="resetBtn" class="mb-2">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import slugify from 'slugify'

  export default {
    data() {
      return {
          title: null,
          content: null,
          file: null,
          slug: null,
          imageUrl: null
      }
    },
    methods: {
        onSubmit(){
            if(this.title === null && this.content === null){
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
        },
        reset(){
            this.title = null
            this.content = null
            this.file = null
            this.imageUrl = null
        }
    }
  }
</script>

<style scoped>
#resetBtn{
  background-color: red;
}
</style>
