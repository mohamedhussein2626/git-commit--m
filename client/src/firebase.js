

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-20512.firebaseapp.com",
  projectId: "mern-blog-app-20512",
  storageBucket: "mern-blog-app-20512.appspot.com",
  messagingSenderId: "962998761194",
  appId: "1:962998761194:web:baf3b68cbfc3576c2e0993"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);