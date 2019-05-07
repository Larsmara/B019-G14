<template>
  <div class="about" id="home-section">
    
    <b-container>
      <b-row>
        <b-col>
          <b-card-group deck>
            <b-card  class="text-left hello">
              <h2>Smart City Halden</h2>
                <p>Smart City, eller smarte byer, er et begrep som brukes over hele verden og som forklarer hvordan byer og bygder
                  skal utvikles til å bli bærekraftige og moderne samfunn. En smart by tar utgangspunkt i innbyggernes behov og tar i bruk ny teknologi for å gjøre byen til et bedre sted å leve, bo og arbeide. Halden kommune ønsker å være Norges mest innovative kommune og dette preger også kommunens Smart City-satsning. Vi ønsker å teste ut nye løsninger og teknologi og vi er åpne for å motta ideer og innspill slik at Halden kommune fortsetter å være en fremtidsrettet og attraktiv kommune å bo i.</p>
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
