import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeJ1eyxFW-znwCTKZaUK7XF4b4AiqfdsU",
  authDomain: "codekit-12981.firebaseapp.com",
  projectId: "codekit-12981",
  storageBucket: "codekit-12981.firebasestorage.app",
  messagingSenderId: "1006434439370",
  appId: "1:1006434439370:web:75d93d8a4536c201f32433",
  measurementId: "G-356VT07089"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
