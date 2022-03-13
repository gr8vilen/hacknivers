import firebase from './firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAYRrP1qKDjTaX49vrQGFdSD7l0-swa4zI",
    authDomain: "hackniverse.firebaseapp.com",
    projectId: "hackniverse",
    storageBucket: "hackniverse.appspot.com",
    messagingSenderId: "531752852520",
    appId: "1:531752852520:web:83f24a712c5ce1aac1e91d",
    measurementId: "G-419XNPFDDJ"
  };

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
  
export default db;