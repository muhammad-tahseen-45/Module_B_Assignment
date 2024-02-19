// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLZbKP4ZVKdw1g1bwNbTST6IueOGY8ax0",
  authDomain: "fir-auth-b10cd.firebaseapp.com",
  projectId: "fir-auth-b10cd",
  storageBucket: "fir-auth-b10cd.appspot.com",
  messagingSenderId: "258385565234",
  appId: "1:258385565234:web:787676e6249c0f3f4a8e2b",
  measurementId: "G-7WRPG5FQ7N"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app)

export {auth,firebase_app};



