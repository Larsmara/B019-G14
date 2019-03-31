import firebase from 'firebase'
import 'firebase/firestore'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCQSTFAbaVWVBwe8oUeuWPFQ9EmV1pF_0E",
  authDomain: "bachelor-824d5.firebaseapp.com",
  databaseURL: "https://bachelor-824d5.firebaseio.com",
  projectId: "bachelor-824d5",
  storageBucket: "bachelor-824d5.appspot.com",
  messagingSenderId: "896918903719"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()