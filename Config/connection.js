// Import the functions you need from the SDKs you need

import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxlcGsRhiLBWh_JPTRIGV478liOLY05qA",
  authDomain: "canteen-auto.firebaseapp.com",
  databaseURL: "https://canteen-auto-default-rtdb.firebaseio.com",
  projectId: "canteen-auto",
  storageBucket: "canteen-auto.appspot.com",
  messagingSenderId: "67659010604",
  appId: "1:67659010604:web:8861b9001815ccd9ab7789",
  measurementId: "G-X5QP3K2FN0"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;