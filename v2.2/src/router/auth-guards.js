import { store } from "../store";
import login from '../components/Bruker/LoginComp.vue'

export default (to, from, next) => {
    if(store.getters.user){
        next()
    } else {
        next('/')
    }
}