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

//https://www.amazon.com.br/dp/B096K7YHPW?tag=geek36003-20&linkCode=ogi&th=1&psc=1
//https://www.kabum.com.br/produto/390499/monitor-gamer-samsung-odyssey-g32-27-led-full-hd-165hz-1ms-hdmi-e-displayport-freesync-premium-ajuste-de-altura-ls27ag32anlxzd?gclid=CjwKCAiA3pugBhAwEiwAWFzwdcEWT_E35K_GogLxXkvoxox-wple0E-_uEGLCyGyD9DlRvmwQ8irMRoCdIgQAvD_BwE

//https://www.fabiobiondi.dev/blog/