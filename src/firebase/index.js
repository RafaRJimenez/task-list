import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyr-qTILa-InOjTRVRroY0RZlStZ4IAGY",
  authDomain: "ob-tasklist-firebase-ce1a2.firebaseapp.com",
  projectId: "ob-tasklist-firebase-ce1a2",
  storageBucket: "ob-tasklist-firebase-ce1a2.firebasestorage.app",
  messagingSenderId: "798465089864",
  appId: "1:798465089864:web:41a4ffc08b5ff36e21937d",
  measurementId: "G-PV8J2MJ89V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);