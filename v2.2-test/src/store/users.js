import { firestoreAction } from 'vuexfire';
import db from '@/db';

const state = {
  users: [],
};

const getters = {
  usersById(state){
    return state.users.reduce((byId, user) => {
      byId[user.id] = user
      return byId
    }, {})
  }
}

const actions = {
  /* init: firestoreAction(({ bindFirestoreRef }) => {    
    setTimeout(() => {
      bindFirestoreRef('users', db.collection('users'));
    }, 1000)
  }), */
};

export default {
  namespaced: true,
  state,
  actions,
  getters
};