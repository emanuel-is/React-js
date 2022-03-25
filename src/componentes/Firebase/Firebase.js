// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUEuS7YpEyPgq0MfpDHikix1TFNfwTdYE",
  authDomain: "pryecto-bien-al-sur.firebaseapp.com",
  projectId: "pryecto-bien-al-sur",
  storageBucket: "pryecto-bien-al-sur.appspot.com",
  messagingSenderId: "459762975840",
  appId: "1:459762975840:web:eddf255e34a4f443fb2f05",
  measurementId: "G-Z0DPMMXGKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);