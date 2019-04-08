<template>
  <div class="container mt-4 pt-5 new-idea">

      <div v-if="takk" class="alert alert-success" role="alert">
        <div class="d-flex align-items-center">
            Din ide er registrert. Denne ideen vil bli vurdert, men vi gjør oppmerksom på at vi ikke kan realisere alle ideer, men dit innspill kan bidra til et bedre samfunn i halden.
          <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
        </div>
      </div>
      <app-feil v-if="feil" :text="feil.message"></app-feil>

      <h1 class="text-center">Send oss din idé!</h1>
    <b-form @submit.prevent="onCreateProject">
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

        <!-- FJERN KOMMENTAREN TIL b-form-textarea FOR Å FÅ TILBAKE ET RENT TEKST INPUT -->

          <!-- <b-form-textarea
            id="textarea"
            v-model="content"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
        /> -->
        <vue-editor class="bg-white" v-model="content" :editorToolbar="customToolbar"></vue-editor> <!-- FJERN DENNE LINJEN FOR Å BLI KVITT HTML KODE I TEKSTEN -->

      </b-form-group>
      <b-button @click="reset" variant="danger" id="resetBtn" class="mb-2">Nullstill skjema</b-button>
      <b-button type="submit" class="mb-2 ml-2 hk-btn" v-if="!takk">Registrer idé</b-button>
      <button v-if="!takk" type="submit" class="btn hk-btn mb-2 ml-2" disabled><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
    </b-form>
         

  </div>
</template>

<script>
import slugify from 'slugify'
import { mapState, mapActions } from 'vuex';
import { setTimeout } from 'timers';
import { VueEditor } from 'vue2-editor'


  export default {
    data() {
      return {
          title: null,
          content: null,
          file: null,
          slug: null,
          imageUrl: null,
          takk: null,
          feil: null,
          customToolbar: [
            [{ header: [false, 1, 2, 3, 4, 5, 6] }],
            ["bold", "italic", "underline", "strike"], // toggled buttons
            [
              { align: "" },
              { align: "center" },
              { align: "right" },
              { align: "justify" }
            ],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
          ]
      }
    },
    components: {
      VueEditor
    },
    methods: {
      ...mapActions('prosjekter', ['init', 'createProject']),
      
        async onCreateProject(){
            if(this.title === null && this.content === null){
                this.feil = {message: 'Tittel eller forklaring kan ikke være tomt.'}
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
                image: this.imageUrl,
                slug: this.slug
            }
              this.takk = 'true'
              this.createProject(projectData)
            setTimeout(() => {
              this.$router.push('/')
            }, 4000)
            
        },
        onFilePicked(event){
            const files = event.target.files
            let filename = files[0].name
            if (filename.lastIndexOf('.') <= 0) {
            this.feil = {message: 'Filen er ikke gyldig'}
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
    },
    created(){
      document.title = "Ny Idé"
      var element = document.getElementById("ny-idé");
      element.classList.add("active", "hk-nav-active");
    },
    destroyed() {
        var element = document.getElementById("ny-idé");
        element.classList.remove("active", "hk-nav-active");
    },
  }
</script>
