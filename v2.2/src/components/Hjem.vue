<template>
  <div class="hello">
    <header class="hjem-header">
      <b-row id="hjem">
        <b-col lg="3" sm="12" order-lg="1" order="3" class="col-hjem">
          <b-card
            title="Smart City"
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              Smart City, eller smarte byer, er et begrep som brukes over hele verden og som forklarer hvordan byer og bygder skal utvikles til å bli bærekraftige og moderne samfunn der både økonomiske, sosiale og miljømessige verdier gjennomsyrer alt vi gjør og skaper.
            </b-card-text>

            <b-button router to="/om-oss" class="btn">Mer om Smart City</b-button>
          </b-card>
        </b-col>
        <b-col lg="6" md="12" sm="12" order-lg="2" order="1" class="col-hjem idea">
          <b-card
            title="Har du en idé?"
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              Vi som kommune ønsker å være på topp når det gjelder innovative løsninger, men det er ikke alltid at det er oss ansatte som sitter på de beste idéene, eller ser behovene. Derfor ønsker vi å høre deres idéforslag.
            </b-card-text>

            <b-button  href="#" class="btn">Send din idé!</b-button>
          </b-card>
        </b-col>
        <b-col lg="3" sm="12" order-lg="3" order="2" class="col-hjem">
          <b-card
            title="Prosjekter"
            tag="article"
            class="mb-2"
          >
            <b-card-text>
               Et Smart City Halden prosjekt utpeker seg ved at (1) prosjektet er bærekraftig på både kort og lang sikt, (2) det utføres i samarbeid med flere ulike samfunnsaktører og (3) det tar i bruk teknologi på en innovativ måte.
            </b-card-text>

            <b-button router to="/prosjekter" class="btn-info">Se prosjekter</b-button>
          </b-card>
          </b-col>
      </b-row>
      </header>
  </div>
</template>

<script>
import Login from './Bruker/LoginComp'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Login
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

<style scoped>

#hjem{
  width: 80%;
  margin: 0 auto;
}

.login-hjm{
  text-decoration: none;
  list-style: none;
}

.col-hjem{
  margin-top: 10%;
}


</style>
