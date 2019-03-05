<template>
    <div class="register container">
        <form @submit.prevent="register" class="card-panel">
            <h2 class="center">Registrer deg</h2>
            <div class="field">
                <label for="email">E-post</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="fname">Fornavn</label>
                <input type="text" name="fname" v-model="fname">
            </div>
            <div class="field">
                <label for="ename">Etternavn</label>
                <input type="text" name="ename" v-model="ename">
            </div>
            <div class="field">
                <label for="phone">Telefonnummer</label>
                <input type="number" name="phone" pattern="\+[0-9\s\-\(\)]+" v-model="phone">
            </div>
            <div class="field">
                <label for="password">Passord</label>
                <input type="password" name="password" v-model="password">
            </div>
            <div class="field">
              <label>
                <input type="checkbox" v-model="gdpr" />
                <span>Ved å godta bla bla bla..... Lagring av persondata...</span>
              </label>
            </div>
            <div id="recaptcha-container"></div>
            <p class="red-text center" v-if="feedback">{{feedback}}</p>
            <div class="field center">
                <button class="btn blue">Verifiser telefon</button>
            </div>
        </form>

        <form @submit.prevent="reg" class="card-panel" id="skjema2">
          <div class="field">
              <label for="ename">Kode fra SMS</label>
              <input type="text" name="smsCode" v-model="smsCode">
          </div>
          <p class="red-text center" v-if="feedback">{{feedback}}</p>
          <div class="field center">
            <button class="btn blue" id="sign-in">Fullfør registreringen</button>
          </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data(){
        return{

        }
    }
}
</script>

<style>

.register{
  max-width: 25%;
  margin-top: 3rem;
}

.register .field{
  margin-bottom: 1.6rem;
}

.hidden{
  display: none;
}

</style>