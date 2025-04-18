// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2e5da.firebaseapp.com",
  projectId: "mern-estate-2e5da",
  storageBucket: "mern-estate-2e5da.firebasestorage.app",
  messagingSenderId: "985035392742",
  appId: "1:985035392742:web:516f7605e9201e6587dd27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);