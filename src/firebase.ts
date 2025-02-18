import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// 🔹 Yahan apne Firebase project ka config paste karein
const firebaseConfig = {
  apiKey: "AIzaSyB6fII9ef9WSTNcFH2p7kFVH7BfmJSQtXE",
  authDomain: "college-crave0.firebaseapp.com",
  projectId: "college-crave0",
  storageBucket: "college-crave0.firebasestorage.app",
  messagingSenderId: "561156152308",
  appId: "1:561156152308:web:1c014263ddb96e17aa37a1",
  measurementId: "G-60TJH50985",
};

// 🔹 Firebase Initialize karein
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
