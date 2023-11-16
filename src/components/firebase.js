// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth"

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7g1sepJYn7bhJk36uggn_HVzT23fC95c",
  authDomain: "fir-6ed13.firebaseapp.com",
  projectId: "fir-6ed13",
  storageBucket: "fir-6ed13.appspot.com",
  messagingSenderId: "673855460795",
  appId: "1:673855460795:web:c07ce7005943562afb609e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore()

export { auth, db };





// import firebase from 'firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyC7g1sepJYn7bhJk36uggn_HVzT23fC95c",
//     authDomain: "fir-6ed13.firebaseapp.com",
//     projectId: "fir-6ed13",
//     storageBucket: "fir-6ed13.appspot.com",
//     messagingSenderId: "673855460795",
//     appId: "1:673855460795:web:c07ce7005943562afb609e"
//   };

// const firebaseApp = firebase.initialize(firebaseConfig);
// const db = firebase.firestore();
// const auth = firebase.auth();

// export {db, auth};