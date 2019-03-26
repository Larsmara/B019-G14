<template>
  <div id="app">

    <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Smart City</el-menu-item>
      <el-menu-item index="2">Prosjekter</el-menu-item>
      <el-menu-item index="3">Om oss</el-menu-item>
      <el-menu-item index="4">Logg inn</el-menu-item>
      <el-menu-item index="5">Logg ut</el-menu-item>
    </el-menu> -->

    <el-button type="text" @click="show = true">click to open the Dialog</el-button>

<!--     <el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>
 -->
 <dialog :show="show"></dialog>
 <dialog :show="show"/>

    

    <router-view/>
  </div>
</template>

<script>
import dialog from './components/Dialog.vue'

export default {
  show: false,
  data(){
    return{
      show: false,
    }
  },
  methods: {
      handleClose(done) {
        done()
      }
    }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
