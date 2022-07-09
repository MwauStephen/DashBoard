// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: "dashboard-84e5f.firebaseapp.com",
  projectId: "dashboard-84e5f",
  storageBucket: "dashboard-84e5f.appspot.com",
  messagingSenderId: "1098535379021",
  appId: "1:1098535379021:web:925b2d0fe0cbef9a477c04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
