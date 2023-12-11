import { initializeApp } from "firebase/app";
// import firebase from 'firebase-admin';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdUCQEH1r8F0l_SYYZJ3NpqorfedkX-Oc",
  authDomain: "smpazzahro-palembang.firebaseapp.com",
  databaseURL: "https://smpazzahro-palembang-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smpazzahro-palembang",
  storageBucket: "smpazzahro-palembang.appspot.com",
  messagingSenderId: "643017840013",
  appId: "1:643017840013:web:bec73038370e16155119c4"
};


  const app             = initializeApp(firebaseConfig)
  const auth            = getAuth(app)
  // const admin           = firebase(app)
  // const administrator   = firebase.admin();
  //const provider         = new GoogleAuthProvider();

  export { auth };