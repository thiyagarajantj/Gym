import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3J7VMST68-MqldUJ31oestfjhmIzP5co",
  authDomain: "gym-project-tjs.firebaseapp.com",
  projectId: "gym-project-tjs",
  storageBucket: "gym-project-tjs.firebasestorage.app",
  messagingSenderId: "187535823910",
  appId: "1:187535823910:web:a6a60fe8c87f76a91ac2e7",
  measurementId: "G-8L1LP6FQ99"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);