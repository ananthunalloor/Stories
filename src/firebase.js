import firebase from 'firebase/app';
import'firebase/storage';
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBiBws9X9J_1DZb44wDgd5KGvIyY31qWZo",
    authDomain: "stories-420f.firebaseapp.com",
    databaseURL: "https://stories-420f.firebaseio.com",
    projectId: "stories-420f",
    storageBucket: "stories-420f.appspot.com",
    messagingSenderId: "346038980583",
    appId: "1:346038980583:web:4222c9e6ec127e0119f742",
    measurementId: "G-QKLSC7ZW0S"
  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  export {
    database
  }