import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_KEY,
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey: " AIzaSyAP8gdlP-TAMZ2CWeYtiKlrI1bHBco6YHc",
  authDomain: "dashboard-84e5f.firebaseapp.com",
  projectId: "dashboard-84e5f",
  storageBucket: "dashboard-84e5f.appspot.com",
  messagingSenderId: "1098535379021",
  appId: "1:1098535379021:web:925b2d0fe0cbef9a477c04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// console.log(app);

export const auth = getAuth();
