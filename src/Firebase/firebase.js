//PlEASE DO NOT MODIFY THIS FILE

const firebase = require('firebase/app');
require('firebase/auth');
require("firebase/firestore");

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDrjDT9YUHFiyQepngbfVW6ILG9AGKQ4mc",
    authDomain: "mastercook-enpm613.firebaseapp.com",
    databaseURL: "https://mastercook-enpm613.firebaseio.com",
    projectId: "mastercook-enpm613",
    storageBucket: "mastercook-enpm613.appspot.com",
    messagingSenderId: "212653137567",
    appId: "1:212653137567:web:fd63e5793ae0a9b19a0caa",
    measurementId: "G-HMQZMJVKE2"
  };

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();
  db.settings({timestampsInSnapshots: true})
  let auth = firebase.auth();
  export default {
    firestore: db,
    auth: auth
  };