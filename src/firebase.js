import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNBzIyeJ-rQXi65-77fgGmwhQLxAhvPvQ",
  authDomain: "plantstore-8f7e1.firebaseapp.com",
  projectId: "plantstore-8f7e1",
  storageBucket: "plantstore-8f7e1.appspot.com",
  messagingSenderId: "957036910704",
  appId: "1:957036910704:web:472fb88e81c7ebbae5bcb5",
};
// Initialize Firebase
const firebaseDB = firebase.initializeApp(firebaseConfig);

export const db = firebaseDB.firestore();
