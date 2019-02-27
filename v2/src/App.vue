<template>
  <div id="app">
    <Navbar/>
    <p v-if="feedback" class="green-text">{{feedback}}</p>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import firebase from 'firebase'

export default {
  name: 'App',
  data(){
    return{
      feedback: null
    }
  },
  components: {
    Navbar
  }
}
</script>

<style>

</style>
