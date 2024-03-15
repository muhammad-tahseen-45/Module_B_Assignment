import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCF7UruVB9h8r3IHO_CAz-qO7HKyiM8ADw",
    authDomain: "blood-bank-67d65.firebaseapp.com",
    projectId: "blood-bank-67d65",
    storageBucket: "blood-bank-67d65.appspot.com",
    messagingSenderId: "263737605771",
    appId: "1:263737605771:web:75ba211740f4d595455e8e",
    measurementId: "G-PF9SG2R7WE"
  };

const firebas_app = initializeApp(firebaseConfig);
const auth = getAuth(firebas_app)

const database = getDatabase(firebas_app);
export { firebas_app, auth ,database}



