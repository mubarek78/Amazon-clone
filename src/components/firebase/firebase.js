// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
// // import * as firebase from "firebase/app"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDDcPSSrGW-DcVPAgOYOtokdGOhSk2bXj8",
    authDomain: "clone-f7213.firebaseapp.com",
    projectId: "clone-f7213",
    storageBucket: "clone-f7213.appspot.com",
    messagingSenderId: "349912256084",
    appId: "1:349912256084:web:cac8b3fc161815d09b67c1",
    measurementId: "G-9QZ1979QHD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};