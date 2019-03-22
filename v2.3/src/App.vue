<template>
  <div id="app">

    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Smart City</el-menu-item>
      <el-menu-item index="2">Prosjekter</el-menu-item>
      <el-menu-item index="3">Om oss</el-menu-item>
      <el-menu-item index="4">Logg inn</el-menu-item>
      <el-menu-item index="5">Logg ut</el-menu-item>
    </el-menu>

    <el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>

    <el-dialog
      title="Tips"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Logg inn" name="first">

            <el-form ref="form" :model="form">
              <el-form-item label="E-post">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="Passord">
                <el-input v-model="form.password"></el-input>
              </el-form-item>
 
              <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
              </el-form-item>
            </el-form>

        </el-tab-pane>
        <el-tab-pane label="Config" name="second">
          <el-card shadow="hover">
      Hover
    </el-card>
        </el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>

    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dialogVisible: false,
      activeName: 'first',
      form: {
          name: '',
          password: ''
        }
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
