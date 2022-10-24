// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaw9GNsEYNupgczmRlkRympWbA1QM7Ce0",
  authDomain: "tecno-insumos.firebaseapp.com",
  projectId: "tecno-insumos",
  storageBucket: "tecno-insumos.appspot.com",
  messagingSenderId: "833873874718",
  appId: "1:833873874718:web:0f5c05e51b90e69fb2030f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)