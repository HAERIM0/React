// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhDZLF1q5ztO-mR2Hxx85VJr7RkcJg21s",
  authDomain: "hwitter-16a70.firebaseapp.com",
  projectId: "hwitter-16a70",
  storageBucket: "hwitter-16a70.appspot.com",
  messagingSenderId: "1021819169630",
  appId: "1:1021819169630:web:0e9fb796a19e2ef2433dcf",
};

const app = initializeApp(firebaseConfig);

export default app;