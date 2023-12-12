import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./firebaseSettings";

  const app             = initializeApp(firebaseConfig)
  const auth            = getAuth()

  export { auth };