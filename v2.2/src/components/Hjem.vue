<template>
  <div class="hello">
      <b-row>
        <b-col lg="3" sm="12" order-lg="1" order="3">
          <b-card
            title="Smart City"
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              Smart City, eller smarte byer, er et begrep som brukes over hele verden og som forklarer hvordan byer og bygder skal utvikles til å bli bærekraftige og moderne samfunn der både økonomiske, sosiale og miljømessige verdier gjennomsyrer alt vi gjør og skaper.
            </b-card-text>

            <b-button href="#" variant="info">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col lg="6" md="12" sm="12" order-lg="2" order="1">
          <b-card
            title="Send Idé"
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              Vi som kommune ønsker å være på topp når det gjelder innovative løsninger, men det er ikke alltid at det er oss ansatte som sitter på de beste idéene, eller ser behovene. Derfor ønsker vi å høre deres idéforslag.
            </b-card-text>

            <b-button href="#" variant="info">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col lg="3" sm="12" order-lg="3" order="2">
          <b-card
            title="Prosjekter"
            tag="article"
            class="mb-2"
          >
            <b-card-text>
               Et Smart City Halden prosjekt utpeker seg ved at (1) prosjektet er bærekraftig på både kort og lang sikt, (2) det utføres i samarbeid med flere ulike samfunnsaktører og (3) det tar i bruk teknologi på en innovativ måte.
            </b-card-text>

            <b-button href="#" variant="info">Go somewhere</b-button>
          </b-card>
          </b-col>
      </b-row>
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

.hello{
  width: 80%;
  margin: 0 auto;
}

</style>
