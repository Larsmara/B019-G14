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
                <button class="btn blue">Registrer idé</button>
            </div>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'CreateProject',
    data(){
      return{
        
      }
    }
  }
</script>

<style>
.new-project{
  max-width: 50%;
}
</style>
