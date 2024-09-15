// src/firebaseConfig.ts
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnCyIx4PX6OCE9_yRAOCdwu6FtRRAnROc",
    authDomain: "my-portfolio-72048.firebaseapp.com",
    databaseURL: "https://my-portfolio-72048-default-rtdb.firebaseio.com",
    projectId: "my-portfolio-72048",
    storageBucket: "my-portfolio-72048.appspot.com",
    messagingSenderId: "1082976154839",
    appId: "1:1082976154839:web:dcb26c979618575aeaac92"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase services you want to use
const auth = getAuth(app); // For authentication
const db = getFirestore(app); // For Firestore database
const storage = getStorage(app); // For Cloud Storage
export { app, auth, db, storage };
