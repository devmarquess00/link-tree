import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA72Ey1au83bo0_yo6vSoSUROizZIMfxGk",
  authDomain: "reactlinks-e6e93.firebaseapp.com",
  projectId: "reactlinks-e6e93",
  storageBucket: "reactlinks-e6e93.firebasestorage.app",
  messagingSenderId: "89205905161",
  appId: "1:89205905161:web:af421134736dafd83aa5d8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };