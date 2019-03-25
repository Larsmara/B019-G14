<template>
  <div>
    <section id="showcase" class="py-5">
        <div class="container-fluid w-75">
          <div class="row justify-content-between align-items-center py-5">
              <div class="col-lg-3 order-sm-3 order-lg-1 mb-3">
                  <h1 class="display-4">Smart City</h1>
                  <p class="lead">Smart City, eller smarte byer, er et begrep som brukes over hele verden og som forklarer hvordan byer og bygder skal utvikles til å bli bærekraftige og moderne samfunn der både økonomiske, sosiale og miljømessige verdier gjennomsyrer alt vi gjør og skaper.</p>
                  <router-link to="/om-oss" tag="button" class="btn btn-outline-secondary btn-lg">Mer om Smart City</router-link>
              </div>
              <div class="col-lg-4 order-sm-1 order-lg-2 mb-3">
                  <h1 class="display-3">Har du en idé?</h1>
                  <p class="lead">Vi som kommune ønsker å være på topp når det gjelder innovative løsninger, men det er ikke alltid at det er oss ansatte som sitter på de beste idéene, eller ser behovene. Derfor ønsker vi å høre deres idéforslag.</p>
                  <span v-if="userIsAuthenticated">
                  <router-link to="/ny-idé" tag="button" class="btn btn-outline-secondary btn-lg">Send Idé</router-link>
                  </span>
                  <span v-else>
                    <router-link to="/ny-idé" tag="button" class="btn btn-outline-secondary btn-lg">Logg inn for og kunne sende idé</router-link>
                  </span>
              </div>
              <div class="col-lg-3 order-sm-2 order-lg-3 mb-3">
                  <h1 class="display-4">Prosjekter</h1>
                  <p class="lead">Et Smart City Halden prosjekt utpeker seg ved at (1) prosjektet er bærekraftig på både kort og lang sikt, (2) det utføres i samarbeid med flere ulike samfunnsaktører og (3) det tar i bruk teknologi på en innovativ måte.</p>
                  <router-link to="/prosjekter" tag="button" class="btn btn-outline-secondary btn-lg">Se prosjekter</router-link>
              </div>
          </div>
      </div>
    </section>

    <section id="logo">
      <div class="carousel-inner d-none d-xl-block">
          <div class="carousel-item img-fluid carousel-image-1 active">
            <img src="../assets/hk-design.png" alt="" class="img-fluid">
          </div>
      </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  created(){
      document.title = "Hjem"
      var element = document.getElementById("hjem");
      element.classList.add("active");
  },
  destroyed() {
      document.title = "Prosjekter"
      var element = document.getElementById("hjem");
      element.classList.toggle("active");
  },
  computed: {
    userIsAuthenticated(){
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    user(){
      return this.$store.getters.user
    }
  },
}
</script>

