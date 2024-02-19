import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyB0CyJ5HhC0ldvlU1es03HhLpzE8OIjhaM",
    authDomain: "fir-with-chat-app.firebaseapp.com",
    projectId: "fir-with-chat-app",
    storageBucket: "fir-with-chat-app.appspot.com",
    messagingSenderId: "399261011898",
    appId: "1:399261011898:web:36202c5125473c7ba1d783",
    measurementId: "G-72T16S3ZJT"
};
const firebas_app = initializeApp(firebaseConfig);
const auth = getAuth(firebas_app)

const database = getDatabase(firebas_app);
export { firebas_app, auth ,database}



