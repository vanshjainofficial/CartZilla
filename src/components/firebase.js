// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAC2D7ZqeFtUxHLbtxUDrnwvylCZ1CN0Zc",
  authDomain: "backend-1e105.firebaseapp.com",
  projectId: "backend-1e105",
  storageBucket: "backend-1e105.appspot.com", // ✅ corrected
  messagingSenderId: "277620244297",
  appId: "1:277620244297:web:ea1220fcde93938bf82498",
  measurementId: "G-99NTXYSZ4Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // ✅ export app

// Auth setup
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Optional: export analytics if needed
export const analytics = getAnalytics(app);