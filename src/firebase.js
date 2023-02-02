// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNIBaIREjBWCoZKcl1ZJC_EaZRF2ufkHI",
    authDomain: "netflix-clone-13573.firebaseapp.com",
    projectId: "netflix-clone-13573",
    storageBucket: "netflix-clone-13573.appspot.com",
    messagingSenderId: "32734996842",
    appId: "1:32734996842:web:d8cc8594928abcf3c29d13"
  };

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = getFirestore(app)