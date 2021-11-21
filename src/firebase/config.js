import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8YYkfpngTdhqzSW4OkzfkCiYhZJtqLrM",
  authDomain: "photogallery-911c5.firebaseapp.com",
  projectId: "photogallery-911c5",
  storageBucket: "photogallery-911c5.appspot.com",
  messagingSenderId: "385884477449",
  appId: "1:385884477449:web:347d60a505de6ef0ff00d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const photoStorage = getStorage(app);;

const db = getFirestore(app);

const timestamp = serverTimestamp(app);

export {  photoStorage, db, timestamp };
