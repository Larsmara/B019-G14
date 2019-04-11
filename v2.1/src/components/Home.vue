<template>
  <div class="index">
        <header class="index-header">
        <div class="container index-content">
            <div class="row">
                <div class="col-sm align-items-end">
                    <div class="card">
                        <article class="card-content">
                            <h2 class="indigo-text">Smart City Halden</h2>
                            <p>Smart City, eller smarte byer, er et begrep som brukes over hele verden og som forklarer hvordan byer og bygder skal
                                utvikles til å bli bærekraftige og moderne samfunn der både økonomiske, sosiale og miljømessige verdier gjennomsyrer alt
                                vi gjør og skaper. </p>
                            <span class="btn blue">
                                <router-link :to="'/om-oss'" class="idea">Mer om Smart City Halden</router-link>
                            </span>
                        </article>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card idea-card">
                        <article class="card-content">
                            <h2 class="indigo-text">Har du en idé?</h2>
                            <p>Vi som kommune ønsker å være på topp når det gjelder innovative løsninger, men det er ikke alltid at det er oss ansatte som
                                sitter på de beste idéene, eller ser behovene. Derfor ønsker vi å høre deres idéforslag.</p>
                            <span class="btn blue">
                                <router-link :to="'/ny-idé'" class="idea">Send inn din idé!</router-link>
                            </span>
                        </article>
                    </div>
                </div>
                <div class="col-sm align-items-end">
                    <div class="card">
                        <article class="card-content">
                            <h2 class="indigo-text">Prosjekter</h2>
                            <p>Et Smart City Halden prosjekt utpeker seg ved at (1) prosjektet er bærekraftig på både kort og lang sikt, (2) det utføres i
                                samarbeid med flere ulike samfunnsaktører og (3) det tar i bruk teknologi på en innovativ måte.</p>
                            <span class="btn blue">
                                <router-link :to="'/prosjekter'" class="idea">Våre prosjekter</router-link>
                            </span>
                        </article>
                    </div>
                </div>
         </div>   
        </div>
        </header>
    </div>
</template>

<script>
import login from './User/LoginComp'
export default {
  name: 'Index',
  components: {login},
  data () {
    return {

    }
  },
  methods: {
      idea(){
          if(this.userIsAuthenticated){
              this.$router.push('/ny-idé')
              console.log('autentisert')
          } else {
              console.log
          }
      }
  },
  created(){
    document.title = "Hjem"
  },
  computed: {
      userIsAuthenticated(){
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      user(){
        return this.$store.getters.user
      }
  }
}
</script>

<style>

.btn a{
    color:white;
}

@import "../components/Style/main.css";

</style>


