// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoPC-t_t0gyItc6H20mSDkw5b_M2UsfN8",
  authDomain: "socializeme-be1f4.firebaseapp.com",
  projectId: "socializeme-be1f4",
  storageBucket: "socializeme-be1f4.appspot.com",
  messagingSenderId: "643940979818",
  appId: "1:643940979818:web:2fc432a0885c1e65a12613",
  measurementId: "G-35CGR2PN2E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestoreDb = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { app, auth, firestoreDb, storage, analytics };
