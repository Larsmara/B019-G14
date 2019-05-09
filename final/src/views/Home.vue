<template>
  <div id="home-section" class="home-section bg-light">
    <section class="pt-5">
        <div class="container-fluid">
          <div class="row justify-content-between">
            <div class="col-lg-4 order-3 order-lg-1 mb-3">
              <div class="card h-100 shadow-sm home-section-box">
                <div class="card-body">
                  <h3 class="card-title">Smart City</h3>
                  <p class="card-text">Smart City, eller smarte byer, er et begrep som brukes over hele verden og som forklarer hvordan byer og bygder skal utvikles til å bli bærekraftige og moderne samfunn. En smart by tar utgangspunkt i innbyggernes behov og tar i bruk ny teknologi for å gjøre byen til et bedre sted å leve, bo og arbeide.</p>
                  
                </div>
                <router-link to="/om-oss" tag="button" class="btn hk-btn">Mer om Smart City</router-link>
              </div>
            </div>
            <div class="col-lg-4 order-1 mb-3">
              <div class="card h-100 shadow-sm home-section-box">
                <div class="card-body">
                  <h3 class="card-title">Har du en Innovasjonsidè?</h3>
                  <p class="card-text">Med en innovasjonside menes forslag til endrede arbeidsmetoder, innføring av ny teknologi eller nye systemer som vil oppfylle minst en av følgende punkter</p>
                  <ol>
                    <li>Bedre kvalitet på tjenesten</li>
                    <li>Bidra til en mer effektiv arbeidshverdag</li>
                    <li>Gi innbyggerne bedre tjenester og/eller miljø</li>
                  </ol>
                  
                </div>
                <router-link v-if="isLoggedIn" to="/ny-idé" tag="button" class="btn hk-btn">Send din Idé</router-link>
                <modal2 v-if="!isLoggedIn"/>
              </div>
            </div>
            <div class="col-lg-4 order-3 order-lg-1 mb-3">
              <div class="card h-100 shadow-sm home-section-box">
                <div class="card-body">
                  <h3 class="card-title">Hva er et innovasjonsprosjekt?</h3>
                  <p class="card-text">Et prosjekt som setter en Innovasjonside ut i livet. Når innovasjonsprosjektet er iverksatt vil dette gi en nytteverdi for ansatte og/eller innbyggere. I et prosjekt definerer vi mål for hva vi vil oppnå og arbeider etter en plan for å nå målet.</p>
                  
                </div>
                <router-link to="/prosjekter" tag="button" class="btn hk-btn">Se Innovasjonsprosjekter</router-link>
              </div>
            </div>
          </div>
        </div>

      <div class="logo">
        <div class="carousel-inner d-none d-xl-block pt-4">
          <div class="carousel-item img-fluid carousel-image-1 active">
            <img src="../assets/hk-design.png" alt="" class="img-fluid">
          </div>
        </div>
      </div>

    </section>



    <!-- <section id="logo">
      <div class="carousel-inner d-none d-xl-block pt-4">
          <div class="carousel-item img-fluid carousel-image-1 active">
            <img src="../assets/hk-design.png" alt="" class="img-fluid">
          </div>
      </div>
    </section> -->

  </div>
</template>

<script>
import testDialog from '../components/Bruker/Dialog'
import { mapActions, mapState } from 'vuex'
import modal2 from '../components/Bruker/Modaltest2'

export default {
  name: 'home',
  data(){
    return{
      show_dialog: false
    }
  },
  components: {
    testDialog,
    modal2
  },
  created(){
      document.title = "Hjem"
      var element = document.getElementById("hjem");
      element.classList.add("active", "hk-nav-active");
  },
  destroyed() {
      var element = document.getElementById("hjem");
      element.classList.remove("active", "hk-nav-active");
  },
  computed: {
    ...mapState('auth', ['user', 'isLoggedIn']),
  },
}
</script>


