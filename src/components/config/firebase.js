// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHZaiIVDBYRWbkb5bRBqdC7lI0s2fzR1M",
  authDomain: "fav-hotelapp.firebaseapp.com",
  projectId: "fav-hotelapp",
  storageBucket: "fav-hotelapp.appspot.com",
  messagingSenderId: "977354334266",
  appId: "1:977354334266:web:a34b97b25c72ce69ab1503",
  measurementId: "G-N272KP230E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth , db};