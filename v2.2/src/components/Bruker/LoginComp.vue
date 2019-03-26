<template>
    <div class="loginComp">
        <!-- <b-button @click="modalShow = !modalShow">Logger deg inn</b-button> -->

        <b-modal :show="show" hide-footer centered title="Smart City">
            <b-tabs content-class="mt-3" class="navbar-dark">
              <b-tab title="Logg inn" active class="text--dark">
                <b-form @submit.prevent="login">
                 <b-form-group  label="E-post:">
                  <b-form-input
                    type="email"
                    v-model="email"
                    required
                    placeholder="E-post" />
                </b-form-group>

                <b-form-group  label="Passord:">
                  <b-form-input
                    type="password"
                    v-model="password"
                    required
                    placeholder="Passord" />
                </b-form-group>
                <div class="knapper mt-4">
                <b-button type="submit">Logg inn</b-button>
                </div>
                <div class="knapper mt-2">
                  <b-button variant="link" @click="dialog2 = !dialog2">Glemt passord?</b-button>
                </div>
              </b-form>
              </b-tab>
              <b-tab title="Registrer deg"><p>I'm the second tab content</p></b-tab>
            </b-tabs>
        </b-modal>

        <b-modal v-model="dialog2" hide-footer centered title="Glemt passord">
          <b-form @submit.prevent="onSubmit">
                 <b-form-group  label="E-post:">
                  <b-form-input
                    type="email"
                    v-model="email"
                    required
                    placeholder="E-post" />
                </b-form-group>
                <div class="knapper mt-4">
                  <b-button class="mr-2" @click="dialog2 = !dialog2">Avbryt</b-button>
                <b-button type="submit">Nullstill passord</b-button>
                </div>
              </b-form>
        </b-modal>

    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            modalShow: false,
            dialog2: false,
            tabIndex: 0,
            email: '',
            password: ''
        }
    },
    methods: {
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-info', 'text-white']
        } else {
          return ['bg-light', 'text-info']
        }
      },
      login(){
        console.log('logget inn')
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      }
    }
}
</script>

<style>
#tabs{
  outline: none;
}
</style>
