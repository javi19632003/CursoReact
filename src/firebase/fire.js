
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0WZn9T7p_6UK-bHnY68Ejmg50LOUnVPw",
  authDomain: "entregacodehouselatiendita.firebaseapp.com",
  projectId: "entregacodehouselatiendita",
  storageBucket: "entregacodehouselatiendita.appspot.com",
  messagingSenderId: "889388178531",
  appId: "1:889388178531:web:462d97b49c6f8fc5ba6c56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


// Lee los datos 
//import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});