// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTVPaCwSY4DADNgyI1Elz3CRUwI3t9r5g",
  authDomain: "holterapp-auth.firebaseapp.com",
  projectId: "holterapp-auth",
  storageBucket: "holterapp-auth.appspot.com",
  messagingSenderId: "296972397743",
  appId: "1:296972397743:web:b79c7b50f520a5b667385a"
};

// Use this to initialize the firebase App
const firebaseApp =firebase.initializeApp(firebaseConfig);


const auth = firebaseApp.auth();
const db = firebaseApp.firestore();  // Initialize Firestore

export { auth, db };