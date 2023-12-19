// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaK4LnM4ZvaPmktk3BJr83bOdYI9HYwk0",
  authDomain: "blogsapp-f17fa.firebaseapp.com",
  databaseURL: "https://blogsapp-f17fa-default-rtdb.firebaseio.com",
  projectId: "blogsapp-f17fa",
  storageBucket: "blogsapp-f17fa.appspot.com",
  messagingSenderId: "414883576006",
  appId: "1:414883576006:web:c8b8ad1d0e1ddcd842bfc7",
  measurementId: "G-HV2NZ9GQSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
