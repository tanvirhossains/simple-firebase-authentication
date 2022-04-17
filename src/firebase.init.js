// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXKEg9WkhcBKueSrfQTProjkcC9qBog5Q",
  authDomain: "simple-firebase-authenti-c1c35.firebaseapp.com",
  projectId: "simple-firebase-authenti-c1c35",
  storageBucket: "simple-firebase-authenti-c1c35.appspot.com",
  messagingSenderId: "1064387544949",
  appId: "1:1064387544949:web:bd205b3c6a476aed78753c",
  measurementId: "G-1FH3VBD7HT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export default app;