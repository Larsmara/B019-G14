<template>

<div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right dash-nav" id="sidebar-wrapper">
      <div class="sidebar-heading">Administrator</div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light" @click="link('hjem')">Dashbord <span class="ml-auto dash-antall hk-blue px-2">{{hjem}}</span></a>
        <a href="#" class="list-group-item list-group-item-action bg-light" @click="link('synlige')">Prosjekter som er synlige <span class="ml-auto dash-antall hk-blue px-2">{{synlig}}</span></a>
        <a href="#" class="list-group-item list-group-item-action bg-light" @click="link('interne')">Interne felles <span class="ml-auto dash-antall hk-blue px-2">{{interne}}</span></a>
        <a href="#" class="list-group-item list-group-item-action bg-light" @click="link('eksterne')">Eksterne <span class="ml-auto dash-antall hk-blue px-2">{{eksterne}}</span></a>
        <a href="#" class="list-group-item list-group-item-action bg-light" @click="link('produksjon')">Produksjon <span class="ml-auto dash-antall hk-blue px-2">{{produksjon}}</span></a>
        <a href="#" class="list-group-item list-group-item-action bg-light" @click="link('utvalgte')">Utvalgte <span class="ml-auto dash-antall hk-blue px-2">{{utvalgte}}</span></a>
        <a href="#" class="list-group-item list-group-item-action bg-light" @click="link('skole')">Skole <span class="ml-auto dash-antall hk-blue px-2">{{skole}}</span></a>
        <a href="#" class="list-group-item list-group-item-action bg-light" @click="link('teknisk')">Teknisk <span class="ml-auto dash-antall hk-blue px-2">{{teknisk}}</span></a>
        <a href="#" class="list-group-item list-group-item-action bg-light" @click="link('helse')">Helse <span class="ml-auto dash-antall hk-blue px-2">{{helse}}</span></a>
        <a href="#" class="list-group-item list-group-item-action bg-light border-bottom" @click="link('brukere')">Brukere <span class="ml-auto dash-antall hk-blue px-2">{{brukere}}</span></a>
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <button class="btn btn-primary sideMenu mt-2 ml-2" id="menu-toggle" @click="toggleSideBar">Vis meny</button>

      <div class="container-fluid">
      
          <router-view/>
      
        
      </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div>

</template>

<script>
import firebase from '@/firebase'
import JQuery from 'jquery'
let $ = JQuery

export default {
    data(){
        return{
          interne: null,
          eksterne: null,
          produksjon: null,
          utvalgte: null,
          hjem: null,
          skole: null,
          teknisk: null,
          helse: null,
          synlig: null,
          brukere: null,
        }
    },
    methods: {
      link(sted){
        this.$router.push(sted)
      },
      toggleSideBar(){
        $("#wrapper").toggleClass("toggled");
      }
    },
    created(){

      document.title = "Admin - Dashbord"
      var element = document.getElementById("dashbord");
      element.classList.add("active", "hk-nav-active");

      firebase.firestore().collection('projects').where('kategori', '==', 'internt').orderBy('date')
      .onSnapshot(snapshot => {
        this.interne = snapshot.size
      })

      firebase.firestore().collection('projects').where('kategori', '==', 'eksternt').orderBy('date')
      .onSnapshot(snapshot => {
        this.eksterne = snapshot.size
      })

      firebase.firestore().collection('projects').where('kategori', '==', 'produksjon').orderBy('date')
      .onSnapshot(snapshot => {
        this.produksjon = snapshot.size
      })

      firebase.firestore().collection('projects').where('kategori', '==', 'utvalgt').orderBy('date')
      .onSnapshot(snapshot => {
        this.utvalgte = snapshot.size
      })
      
      firebase.firestore().collection('projects').where('kategori', '==', null).orderBy('date')
      .onSnapshot(snapshot => {
        this.hjem = snapshot.size
      })

      firebase.firestore().collection('projects').where('kategori', '==', 'skole').orderBy('date')
      .onSnapshot(snapshot => {
        this.skole = snapshot.size
      })

      firebase.firestore().collection('projects').where('kategori', '==', 'teknisk').orderBy('date')
      .onSnapshot(snapshot => {
        this.teknisk = snapshot.size
      })

      firebase.firestore().collection('projects').where('kategori', '==', 'helse').orderBy('date')
      .onSnapshot(snapshot => {
        this.helse = snapshot.size
      })

      firebase.firestore().collection('users')
      .onSnapshot(snapshot => {
        this.brukere = snapshot.size
      })

      firebase.firestore().collection('projects').where('synlig', '==', true).orderBy('date')
      .onSnapshot(snapshot => {
        this.synlig = snapshot.size
      })
      
    },
    destroyed() {
        var element = document.getElementById("dashbord");
        element.classList.remove("active", "hk-nav-active");
    }
}
</script>



<style lang="scss" scoped>

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -17rem;
  margin-top: 20px;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 17rem;
}

#page-content-wrapper {
  min-width: 100vw;
  margin-top: 20px;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -17rem;
  }
}

</style>
