import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzhScssR5kfzONCOZSC-XkCtGQtd9mcCU",
  authDomain: "chat-messanger-5f60f.firebaseapp.com",
  projectId: "chat-messanger-5f60f",
  storageBucket: "chat-messanger-5f60f.appspot.com",
  messagingSenderId: "204487250608",
  appId: "1:204487250608:web:c563c67e298ce37bdb6175"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
