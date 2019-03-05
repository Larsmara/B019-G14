<template>
  <v-app id="app">
    <Navbar/>
  </v-app>
</template>

<script>
import Navbar from './components/layouts/Navbar'

  export default {
    name: 'App',
    data(){
      return {
        
      }
    },
    components: {
      Navbar
    }
    
  }
</script>