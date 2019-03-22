<template>
  <div class="hello">
    <el-container>
    <el-row>
      <el-col :span="6" :xs="24"><div class="grid-content bg-purple-light">
        <el-card shadow="hover">
          <el-title>Har du en idé?</el-title>
          <p>Vi som kommune ønsker å være på topp når det gjelder innovative løsninger, men det er ikke alltid at det er oss ansatte som
          sitter på de beste idéene, eller ser behovene. Derfor ønsker vi å høre deres idéforslag.</p>
          <el-button type="primary">Primary</el-button>
        </el-card>
        </div></el-col>

      <el-col :span="12" :xs="24"><div class="grid-content bg-purple-light">
        <el-card shadow="hover">
          <el-title>Har du en idé?</el-title>
          <p>Vi som kommune ønsker å være på topp når det gjelder innovative løsninger, men det er ikke alltid at det er oss ansatte som
          sitter på de beste idéene, eller ser behovene. Derfor ønsker vi å høre deres idéforslag.</p>
          <el-button type="primary">Primary</el-button>
        </el-card>
        </div></el-col>

      <el-col :span="6" :xs="24"><div class="grid-content bg-purple-light">
        <el-card shadow="hover">
          <el-title>Har du en idé?</el-title>
          <p>Vi som kommune ønsker å være på topp når det gjelder innovative løsninger, men det er ikke alltid at det er oss ansatte som
          sitter på de beste idéene, eller ser behovene. Derfor ønsker vi å høre deres idéforslag.</p>
          <el-button type="primary">Primary</el-button>
        </el-card>
        </div></el-col>
    </el-row>
  </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
