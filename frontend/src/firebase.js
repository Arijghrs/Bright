// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bright-2e2a4.firebaseapp.com",
  projectId: "bright-2e2a4",
  storageBucket: "bright-2e2a4.appspot.com",
  messagingSenderId: "419008329504",
  appId: "1:419008329504:web:5204df040c5d1c40d98945"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);