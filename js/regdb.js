// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSCR_SvFvSwZt1Fz2jcbK4htvrzk4vRSA",
  authDomain: "amoksh-5c507.firebaseapp.com",
  projectId: "amoksh-5c507",
  storageBucket: "amoksh-5c507.appspot.com",
  messagingSenderId: "497676175604",
  appId: "1:497676175604:web:726196490d1eda6cd4b6a1",
  measurementId: "G-2KE62QR4BZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
