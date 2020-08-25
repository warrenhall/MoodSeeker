import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3kQeyoxbBYI4DpQR8NoSqxqTbqIxjc9A",
  authDomain: "moodseeker.firebaseapp.com",
  databaseURL: "https://moodseeker.firebaseio.com",
  projectId: "moodseeker",
  storageBucket: "moodseeker.appspot.com",
  messagingSenderId: "742083509238",
  appId: "1:742083509238:web:7650d4d4da9941b901a5d7",
  measurementId: "G-H73BS0B78Y",
});
export const db = firebaseApp.firestore();
