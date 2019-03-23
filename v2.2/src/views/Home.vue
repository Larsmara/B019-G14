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

<style scoped>
.home{
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(../../public/HaldenBy.jpg);
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(../../public/HaldenBy.jpg);
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-attachment: fixed;
}
</style>
