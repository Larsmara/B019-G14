import { firestoreAction } from 'vuexfire';
import db from '@/db'
import firebase from '@/firebase'


const state = {
  prosjekter: [],
}

const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('prosjekter', db.collection('projects'));
  }),
}

export default {
  namespaced: true,
  state,
  actions,
};