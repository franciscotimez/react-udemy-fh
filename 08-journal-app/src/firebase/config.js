// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG1-bJV6JzSIHNQ8tQyQGsZ_UsAVfjgCw",
  authDomain: "react-app-curso-fh-57827.firebaseapp.com",
  projectId: "react-app-curso-fh-57827",
  storageBucket: "react-app-curso-fh-57827.appspot.com",
  messagingSenderId: "720937019164",
  appId: "1:720937019164:web:610e9a56604239e7b9fcd9"
};

// Initialize Firebase Aplication
export const FirebaseApp = initializeApp(firebaseConfig);

// Get Authenticate feature
export const FirebaseAuth = getAuth( FirebaseApp );

// Get Database feature
export const FirebaseDB = getFirestore( FirebaseApp );