import firebase from 'firebase'
import 'firebase/firestore'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDI7BmzmZwBFrbVZYocfLPHQxhATToLnqI",
    authDomain: "geo-ninja-87f3b.firebaseapp.com",
    databaseURL: "https://geo-ninja-87f3b.firebaseio.com",
    projectId: "geo-ninja-87f3b",
    storageBucket: "",
    messagingSenderId: "158248131801"
  };
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()