// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
require("dotenv").config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE5cGMk4WGYb9S_lpGVLPKGPMTZEx7T5Y",
  authDomain: "music-c0953.firebaseapp.com",
  projectId: "music-c0953",
  storageBucket: "music-c0953.appspot.com",
  messagingSenderId: "753409674828",
  appId: "1:753409674828:web:c6c9b03b070f6614dc2ee9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googelProvider = new GoogleAuthProvider();
