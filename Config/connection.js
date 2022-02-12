import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBxlcGsRhiLBWh_JPTRIGV478liOLY05qA',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://canteen-auto-default-rtdb.firebaseio.com/',
  projectId: 'canteen-auto-id',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

initializeApp(firebaseConfig);