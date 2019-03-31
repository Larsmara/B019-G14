<template>
  <div class="about ">
    
    <b-container>
      <b-row>
        <b-col>
          <b-card-group deck>
            <b-card  class="text-left hello">
              <h2>Smart City Halden</h2>
                    <h4> Smart by, et godt sted å leve</h4>
                    <p><span class="about-intro">Smart City, eller smarte byer, er et begrep som brukes over hele verden og som forklarer
                        hvordan byer og bygder skal utvikles til å bli bærekraftige og moderne samfunn der både økonomiske, sosiale og
                        miljømessige verdier gjennomsyrer alt vi gjør og skaper. </span><p>
                    <p>Halden kommune skal være Norges mest innovative kommune, og har startet programmet Smart City Halden for å bidra til dette. </p>
                    <p>Programmet skal legge til rette for forskning, utvikling og innovasjon for en bærekraftig samfunnsutvikling. Programmet skal
                      stimulere til eksperimentering, testing og demonstrering av ny teknologi, nye tjenester til innbyggerne og nye typer
                      forretningsmodeller som skaper verdi for et fremtidsrettet samfunn. </p>
                    <p>Et Smart City Halden prosjekt utpeker seg ved at <br>(1) prosjektet er bærekraftig på både kort og lang sikt <br>(2) det utføres
                      i samarbeid med flere ulike samfunnsaktører og <br>(3) det tar i bruk teknologi på en innovativ måte. </p>
                    <p>Disse tre er driverne i Smart City Halden, og skal være synlige i ethvert Smart City Halden-prosjekt.</p>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>


  </div>
</template>

<script>

export default {
  data(){
    return{
    }
  },
  created(){
      document.title = "Om-oss"
      var element = document.getElementById("om-oss");
      element.classList.add("active", "hk-nav-active");
  },
  destroyed() {
      document.title = "Prosjekter"
      var element = document.getElementById("om-oss");
      element.classList.remove("active", "hk-nav-active");
  },
}
</script>

<style scoped>
.hello{
  margin: 10% auto auto auto;
}


</style>
