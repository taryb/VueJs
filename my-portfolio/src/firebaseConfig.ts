// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Import Firebase Storage

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
const storage = getStorage(app); // Initialize Firebase Storage

export { auth, db, storage };
