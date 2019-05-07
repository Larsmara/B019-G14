import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCnNjX4E_mdAGKsfW2d6l7nYBA3ze-OROw",
    authDomain: "ideportalen-hk.firebaseapp.com",
    databaseURL: "https://ideportalen-hk.firebaseio.com",
    projectId: "ideportalen-hk",
    storageBucket: "ideportalen-hk.appspot.com",
    messagingSenderId: "75245132483",
    appId: "1:75245132483:web:8f2c7ac51f627a69"
  };
  firebase.initializeApp(config);

  export default firebase;