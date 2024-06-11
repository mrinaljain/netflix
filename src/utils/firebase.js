// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7hVyWcbiuVXulm60Jkm8BkEYcgSVKWJc",
  authDomain: "netflix-8c9ee.firebaseapp.com",
  projectId: "netflix-8c9ee",
  storageBucket: "netflix-8c9ee.appspot.com",
  messagingSenderId: "925880119615",
  appId: "1:925880119615:web:a118fc692bd5fb8d0e638a",
  measurementId: "G-5GMJNZHMMV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
