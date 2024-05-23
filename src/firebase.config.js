// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkrLbUUfVsbek1ud7YJ8f3meqv1UPEeVI",
  authDomain: "jobnest-3c6f5.firebaseapp.com",
  projectId: "jobnest-3c6f5",
  storageBucket: "jobnest-3c6f5.appspot.com",
  messagingSenderId: "807025718313",
  appId: "1:807025718313:web:2db9ba6e6c95fc7a649838"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};