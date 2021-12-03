import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCEgXmx2wOBjg8pkdrkvBhJ6b7VhWv1XEg",
  authDomain: "rj-martinez.firebaseapp.com",
  projectId: "rj-martinez",
  storageBucket: "rj-martinez.appspot.com",
  messagingSenderId: "302701921632",
  appId: "1:302701921632:web:66ffc6890ef2ce5bc9ca05"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);