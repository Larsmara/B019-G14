<template>
<div class="min-side bg-light">
    <div class="pt-5">
        <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-12 col-xs-10">
                <div class="card shadow-sm">
                    <div class="card-header">
                        Min info
                    </div>
                    <div class="card-body">
                        <p class="d-flex"><i class="fas fa-envelope pt-1 pr-1"></i> {{user.email}} <button class="btn hk-outline-btn btn-sm ml-auto">Endre epost</button></p>
                        <p><i class="fas fa-user"></i> {{user.name}}</p>
                        <p class="d-flex"><i class="fas fa-phone pt-1 pr-1"></i> {{user.phone}} <button class="btn hk-outline-btn btn-sm ml-auto">Endre epost</button> </p>
                        <p class="card-text text-muted">Ble medlem: {{moment(user.joined).format('lll')}}</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-8 col-md-12">
                <div class="container">
                <b-media vertical-align="center" class="border p-3 my-3 shadow-sm" v-for="project in projects" :key="project.id">
                    <img v-if="!project.imageUrl" src="../../assets/idea2.jpg" slot="aside" blank blank-color="#ccc" width="80" height="80" alt="placeholder" />
                    <img v-else :src="project.imageUrl" slot="aside" blank blank-color="#ccc" width="80" height="80" alt="placeholder" />

                    <h5 class="mt-0 mb-1">{{project.title}}</h5>
                    <p class="mb-0">{{project.content}}</p>
                    <p><small class="text-muted">{{project.date}}</small></p>
                    <div class="mt-1">
                        <router-link class="btn hk-btn mt-auto" router :to="'/prosjekt/' + project.id">Les mer</router-link>
                    </div>
                </b-media>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import moment from 'moment'
import { mapActions, mapState } from 'vuex'


export default {
    props: ['id'],
    data(){
        return{
            moment
        }
    },
    computed: mapState('auth', ['user', 'isLoggedIn']),
    updated(){
      document.title = "Min Side"
      var element = document.getElementById("minSide");
      element.classList.add("active", "hk-nav-active");
    },
    destroyed() {
        var element = document.getElementById("minSide");
        element.classList.remove("active", "hk-nav-active");
    },
}
</script>
