<template>
  <div class="hello">
    <b-container class="home-container">
      <b-row>
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              Smart City, eller smarte byer, er et begrep som brukes over hele verden og som forklarer hvordan byer og bygder skal utvikles til å bli bærekraftige og moderne samfunn der både økonomiske, sosiale og miljømessige verdier gjennomsyrer alt vi gjør og skaper.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col cols="6">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              Vi som kommune ønsker å være på topp når det gjelder innovative løsninger, men det er ikke alltid at det er oss ansatte som sitter på de beste idéene, eller ser behovene. Derfor ønsker vi å høre deres idéforslag.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>
               Et Smart City Halden prosjekt utpeker seg ved at (1) prosjektet er bærekraftig på både kort og lang sikt, (2) det utføres i samarbeid med flere ulike samfunnsaktører og (3) det tar i bruk teknologi på en innovativ måte.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
          </b-col>
      </b-row>
    </b-container>
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
