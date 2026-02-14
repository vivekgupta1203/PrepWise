import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ0JsBjPhqYTkrhprXXmw4jkLcPhi_F4Y",
  authDomain: "prepwise-e1c71.firebaseapp.com",
  projectId: "prepwise-e1c71",
  storageBucket: "prepwise-e1c71.firebasestorage.app",
  messagingSenderId: "122058098128",
  appId: "1:122058098128:web:9fbb24d85ad20e6aa0e5d5",
  measurementId: "G-FDZMZ5KFBV"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);