<template>
    <h2>Eksterne prosjekter</h2>
</template>

<script>
import AdminNav from './AdminNav'

  export default {
      name: 'Eksterne',
    data () {
      return {
        
      }
    },
    components: {
        AdminNav
    },
    created(){
        document.title = 'Eksterne prosjekter'
    }
  }
</script>
