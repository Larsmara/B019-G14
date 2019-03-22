<template>
    <div class="loginComp">
        <b-nav-item @click="modalShow = !modalShow">Logger deg inn</b-nav-item>

        <b-modal v-model="modalShow" hide-footer centered title="Smart City">

            <!-- <b-tabs card v-model="tabIndex" class="bg-transparent" id="tabs">
                <b-tab title="Logg Inn" :title-link-class="linkClass(0)">
                  <b-form @submit.prevent="onSubmit">
                      <b-form-input
                        id="exampleInput1"
                        type="email"
                        v-model="email"
                        required
                        placeholder="Enter email" />

                    <b-form-group  label="Your Name:">
                      <b-form-input
                        type="text"
                        v-model="name"
                        required
                        placeholder="Enter name" />
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                  </b-form>
                </b-tab>
                <b-tab title="Registrer deg" :title-link-class="linkClass(1)">Tab Contents 2

                </b-tab>
            </b-tabs> -->
            
            <b-tabs content-class="mt-3" class="navbar-dark">
              <b-tab title="Logg inn" active class="text--dark">
                <b-form @submit.prevent="onSubmit">
                 <b-form-group  label="E-post:">
                  <b-form-input
                    type="text"
                    v-model="name"
                    required
                    placeholder="Enter name" />
                </b-form-group>

                <b-form-group  label="Your Name:">
                  <b-form-input
                    type="text"
                    v-model="name"
                    required
                    placeholder="Enter name" />
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
              </b-form>
              </b-tab>
              <b-tab title="second"><p>I'm the second tab content</p></b-tab>
            </b-tabs>

            

        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            modalShow: false,
            tabIndex: 0,
            email: '',
            name: ''
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
      onSubmit(){
        console.log('Submitta')
      }
    }
}
</script>

<style>
#tabs{
  outline: none;
}
</style>
