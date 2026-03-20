// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfYjuzNtcbjVqjdYxKDtWxPRSf9WZlTK0",
  authDomain: "adverse-films.firebaseapp.com",
  projectId: "adverse-films",
  storageBucket: "adverse-films.firebasestorage.app",
  messagingSenderId: "482781607174",
  appId: "1:482781607174:web:2f4edfa0710a7e6d975a87",
  measurementId: "G-64CF1GVXCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export { analytics };

// Export app for advanced usage
export default app;
