// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-60403.firebaseapp.com",
  projectId: "mern-estate-60403",
  storageBucket: "mern-estate-60403.appspot.com",
  messagingSenderId: "211722375801",
  appId: "1:211722375801:web:32141c6ae71b65ebdf3aa8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);