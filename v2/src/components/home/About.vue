<template>
    <div class="about container">
      <header class="about-header"></header>
      <article>
        <h2>Smart City Halden </h2>
        <h4>Smart by, et godt sted å leve</h4>
        <p style="font-weight: bold;">Smart City, eller smarte byer, er et begrep som brukes over hele verden og som forklarer hvordan byer og bygder
          skal utvikles til å bli bærekraftige og moderne samfunn der både økonomiske, sosiale og miljømessige verdier gjennomsyrer
          alt vi gjør og skaper. </p>
        <p>Halden kommune skal være Norges mest innovative kommune, og har startet programmet Smart City Halden for å bidra til dette. </p>
        <p>Programmet skal legge til rette for forskning, utvikling og innovasjon for en bærekraftig samfunnsutvikling. Programmet skal
          stimulere til eksperimentering, testing og demonstrering av ny teknologi, nye tjenester til innbyggerne og nye typer
          forretningsmodeller som skaper verdi for et fremtidsrettet samfunn. </p>
        <p>Et Smart City Halden prosjekt utpeker seg ved at (1) prosjektet er bærekraftig på både kort og lang sikt, (2) det utføres
          i samarbeid med flere ulike samfunnsaktører og (3) det tar i bruk teknologi på en innovativ måte. </p>
        <p>Disse tre er driverne i Smart City Halden, og skal være synlige i ethvert Smart City Halden-prosjekt.</p>
      </article>
    </div>
</template>

<script>
export default {
    name: 'About',
    data(){
        return {

        }
    },
    created(){
        document.title = "Om oss"
    }
}
</script>

<style>

.about-header {
  background-image: url("../images/smartcity-about.jpg");
  background-size: cover;
  height: 300px;
  margin-top: 40px;
}

article {
  max-width: 50%;
  margin: auto;
}


</style>
