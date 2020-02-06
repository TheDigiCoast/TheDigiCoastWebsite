import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCq0M0DCpL3I_6fobTn64WwSHVdqPc66Xs",
    authDomain: "thedigicoast-22483.firebaseapp.com",
    databaseURL: "https://thedigicoast-22483.firebaseio.com",
    projectId: "thedigicoast-22483",
    storageBucket: "thedigicoast-22483.appspot.com",
    messagingSenderId: "868919133325",
    appId: "1:868919133325:web:96ced586575b664eab0ec4",
    measurementId: "G-TSLRHYT51B"
  }
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth =firebase.auth()
export const db = firebase.firestore()

//studentReg

export default firebase;
