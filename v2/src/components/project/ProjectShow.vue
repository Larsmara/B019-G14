<template>
    <div class="project-show container">
        <div v-for="pro in project" :key="pro.user_id">
            <a href="/project">Tilbake</a>
            <h3>{{pro.title}}</h3>
            <hr>
            <p>{{pro.content}}</p>
            <p style="font-style: italic;">{{pro.time}}</p>
            <p style="font-style: italic;">{{pro.user}}</p>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import Project from './Project'
import Projects from './Project'
import moment from 'moment'

export default {
    name: 'ProjectShow',
    data(){
        return {
            project: [],
            user: null,
            ansvarlig: null
        }
    },
    created(){
        console.log(this.$route.params.id)
        let project = db.collection("projects")

        project.where('slug', '==', this.$route.params.id)
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.project.push({
                        title: doc.data().title,
                        content: doc.data().content,
                        user: doc.data().user_id,
                        time: moment(doc.data().timestamp).format('lll')
                    })
                }
            })
        })

        db.collection("users").where("user_id", "==", this.user)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log("Like")
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }
}
</script>

<style>

.project-show {
  max-width: 50%;
  margin-top: 3rem;
}

.project-show a {
    color: #0091D3;
}

</style>
