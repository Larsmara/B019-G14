<template>
<div>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Navn</th>
            <th scope="col">E-post</th>
            <th scope="col">Telefon</th>
            <th scope="col">Id</th>
            <th scope="col">Admin</th>
            <th scope="col">Ble medlem</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(bruker, index) in brukere" :key="bruker.id">
                <th scope="row">{{index}}</th>
                <td>{{bruker.fnavn}} {{bruker.enavn}}</td>
                <td>{{bruker.email}}</td>
                <td>{{bruker.telefon}}</td>
                <td>{{bruker.userId}}</td>
                <td>{{bruker.isAdmin}}</td>
                <td>{{moment(bruker.joined).format('lll')}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import firebase from '@/firebase'
import moment from 'moment'

export default {
    data(){
        return{
            brukere: [],
            moment
        }
    },
    created(){
        firebase.firestore().collection('users')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                console.log(change.doc.data())
                this.brukere.push( change.doc.data())
            })
        })
    }
}
</script>
