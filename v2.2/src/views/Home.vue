<template>
  <div class="home">
    <Hjem/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hjem from '@/components/Hjem.vue'

export default {
  name: 'home',
  components: {
    Hjem
  },
  created(){
        document.title = "Smart City - Halden"
    }
}
</script>
