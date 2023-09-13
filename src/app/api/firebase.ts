import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXNh2gH2h3TWrpn2mtSr5UuAPkEPTFMWU",
  authDomain: "social-invitation-cefd8.firebaseapp.com",
  projectId: "social-invitation-cefd8",
  storageBucket: "social-invitation-cefd8.appspot.com",
  messagingSenderId: "127651678534",
  appId: "1:127651678534:web:871f8e65afb010f16efd47",
  measurementId: "G-TQTCLLJG03",
  databaseURL: "https://social-invitation-cefd8.firebaseio.com ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);