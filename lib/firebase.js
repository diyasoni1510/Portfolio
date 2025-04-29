// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr5NpIno9SrnhXNNfJBX6Qo-r6QoupbLg",
  authDomain: "portfolio-882003.firebaseapp.com",
  projectId: "portfolio-882003",
  storageBucket: "portfolio-882003.firebasestorage.app",
  messagingSenderId: "227710941106",
  appId: "1:227710941106:web:e2a203977d2e60807156ab",
  measurementId: "G-3CNJ1FRYFN",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCr5NpIno9SrnhXNNfJBX6Qo-r6QoupbLg",
//   authDomain: "portfolio-882003.firebaseapp.com",
//   projectId: "portfolio-882003",
//   storageBucket: "portfolio-882003.firebasestorage.app",
//   messagingSenderId: "227710941106",
//   appId: "1:227710941106:web:e2a203977d2e60807156ab",
//   measurementId: "G-3CNJ1FRYFN"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
