<template>
    <div class="container pt-4">
        <button class="align-self-start btn hk-btn" @click="goBack">Tilbake</button>
        <!-- PROSJEKT VISNING -->
    <section id="prosjekterVisning" class="my-5 pt-5 text-center">
        <div class="container">
            <div class="row">
                <div class="col pb-5">
                    <div class="card w-75 h-100">
                        <div class="card-body">
                            <img v-if="!project.imageUrl" src="../../assets/idea.png" alt="Standard prosjekt bilde om innsender ikke legger ved ett" class="img-fluid rounded w-25 mb-3 pt-5">
                            <img v-else :src="project.imageUrl" alt="Prosjekt bilde fra innsender" class="img-fluid rounded w-50 mb-3 border">
                            <h3>{{project.title}}</h3>
                            <hr>
                            <p>{{project.content}}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Innsendt: {{project.date}}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: ['id'],
    computed: {
        project(){
            return this.$store.getters.loadedProject(this.id)
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>


<style>

</style>
