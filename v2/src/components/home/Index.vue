<template>
  <div class="index container">
    <div class="card">
      <div class="card-content">
        <h2 class="indigo-text">Om oss</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat necessitatibus commodi expedita soluta similique tempore dolore repudiandae, blanditiis praesentium explicabo maxime in est, inventore nemo quis corporis exercitationem provident! Eius odit ea excepturi, deserunt quia error est quae assumenda sunt?</p>
        <span class="btn blue">
          <router-link :to="{name: 'About'}" class="idea">Mer om oss</router-link>
        </span>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h2 class="indigo-text">Prosjekter</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae porro exercitationem autem voluptatem corrupti, nesciunt vero deleniti cum aperiam rerum delectus molestias nam expedita sed ut fugiat facilis harum magni est reprehenderit eligendi explicabo amet corporis. Consectetur, impedit alias?</p>
        <span class="btn blue">
          <router-link :to="{name: 'Project'}" class="idea">Våre prosjekter</router-link>
        </span>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h2 class="indigo-text">Har du en idé?</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus explicabo quo ut recusandae cumque sunt dicta est, eaque architecto magnam quos eius ullam in corrupti natus ratione iusto officiis nam error reiciendis optio sequi ex voluptatibus. Possimus laboriosam facilis nobis.</p>
        <span class="btn blue">
          <router-link :to="{name: 'NewProject'}" class="idea">Send din idé!</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      
    }
  },
  created(){
    document.title = "Hjem"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}

.idea{
  color: white;
}

</style>
