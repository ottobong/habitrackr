import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZsqwUlQjuFk0xErMFOZB6omUU_wSa2to",
  authDomain: "habit-tracker-1609f.firebaseapp.com",
  projectId: "habit-tracker-1609f",
  storageBucket: "habit-tracker-1609f.appspot.com",
  messagingSenderId: "486435065998",
  appId: "1:486435065998:web:90dda809c5c57a6a47b9df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);