<template>
<div class="container-fluid dash-nav">
  <div class="row">
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky pt-5">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link" to="/hjem">
              <span data-feather="home"></span>
              Dashbord
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/interne">
              <span data-feather="file"></span>
              Interne
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/eksterne">
              <span data-feather="shopping-cart"></span>
              Eksterne
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/produksjon">
              <span data-feather="users"></span>
              Produksjon
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/utvalgte">
              <span data-feather="bar-chart-2"></span>
              Utvalgte
            </router-link>
          </li>
        </ul> 
      </div>
    </nav>

    

    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

        <router-view/>
      <!-- <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard - Nye innkommende forslag</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
          
        </div>
      </div>

      <div class="table-responsive">
        <b-media vertical-align="center" class="border p-3 my-3 shadow-sm" v-for="project in prosjekter" :key="project.id">
            <img v-if="!project.imageUrl" src="../../assets/idea2.jpg" slot="aside" blank blank-color="#ccc" width="80" height="80" alt="placeholder" class="d-none d-sm-block" />
            <img v-else :src="project.imageUrl" slot="aside" blank blank-color="#ccc" width="80" height="80" alt="placeholder" class="d-none d-sm-block"/>

            <h5 class="mt-0 mb-1">{{project.title}}</h5>
            <p class="mb-0">{{project.content}}</p>
            <p><small class="text-muted">{{project.date}}</small></p>
            <div class="btn-group pt-2" role="group" aria-label="Basic example">
                <button type="button" class="btn hk-outline-btn">Les mer</button>
                <button type="button" class="btn btn-outline-danger">Slett</button>
                <button type="button" class="btn hk-outline-btn">Produksjon</button>
            </div>
            <div class="btn-group pt-2" role="group">
                <button type="button" class="btn hk-outline-btn">Interne</button>
                <button type="button" class="btn hk-outline-btn">Eksterne</button>
                <button type="button" class="btn hk-outline-btn">Utvalgt</button>
            </div>
        </b-media>
      </div> -->
    </main>
  </div>

<div class="fab">
  <span class="fab-action-button">
        <i class="fab-action-button__icon"></i>
    </span>
  <ul class="fab-buttons">
      <li class="fab-buttons__item">
      <a href="#" class="fab-buttons__link" data-tooltip="Utvalgt">
        <i class="icon-material icon-material_gp"></i>
      </a>
    </li>
    <li class="fab-buttons__item">
      <a href="#" class="fab-buttons__link" data-tooltip="Produksjon">
        <i class="icon-material icon-material_gp"></i>
      </a>
    </li>
    <li class="fab-buttons__item">
      <a href="#" class="fab-buttons__link" data-tooltip="Eksterne">
        <i class="icon-material icon-material_gp"></i>
      </a>
    </li>
    <li class="fab-buttons__item">
      <a href="#" class="fab-buttons__link" data-tooltip="Interne">
        <i class="icon-material icon-material_gp"></i>
      </a>
    </li>
    <li class="fab-buttons__item">
      <a href="/" class="fab-buttons__link" data-tooltip="Hjem">
        <i class="icon-material icon-material_gp"></i>
      </a>
    </li>
  </ul>
</div>

</div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created(){
      document.title = "Admin - Dashbord"
      var element = document.getElementById("dashbord");
      element.classList.add("active", "hk-nav-active");
    },
    destroyed() {
        var element = document.getElementById("dashbord");
        element.classList.remove("active", "hk-nav-active");
    },
    computed: {
        prosjekter(){
            return this.$store.getters.adminProject
        }
    }
}
</script>



<style lang="scss" scoped>



body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Content
 */

[role="main"] {
  padding-top: 133px; /* Space for fixed navbar */
}

@media (min-width: 768px) {
  [role="main"] {
    padding-top: 48px; /* Space for fixed navbar */
  }
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}
</style>
