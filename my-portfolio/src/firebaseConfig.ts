// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Firebase Auth
import { getFirestore } from 'firebase/firestore'; // Firestore

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

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
