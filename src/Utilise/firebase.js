// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC2ZxAwVllyLLzz7cOn1ZMcbQ1_QQBfP4",
  authDomain: "netfixgpt-clone-6098b.firebaseapp.com",
  projectId: "netfixgpt-clone-6098b",
  storageBucket: "netfixgpt-clone-6098b.appspot.com",
  messagingSenderId: "1089032515588",
  appId: "1:1089032515588:web:cd75f6a936f0e64ad8c551",
  measurementId: "G-MXZGB3538B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
