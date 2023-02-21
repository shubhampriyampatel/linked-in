import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDsX08v6WIBrD47k19f2TE2jN_lQtCylg4",
    authDomain: "linked-in-77518.firebaseapp.com",
    projectId: "linked-in-77518",
    storageBucket: "linked-in-77518.appspot.com",
    messagingSenderId: "488239206294",
    appId: "1:488239206294:web:c9a69266b612643478d7b7",
    measurementId: "G-SCP2BZ1659"
  };

  const app = initializeApp(firebaseConfig);

  // Export firestore database
  // It will be imported into your react app whenever it is needed
  export const db = getFirestore(app);