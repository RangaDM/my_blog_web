import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtzIMLK8LorvC49anEb1ixtgO6iizq1AQ",
  authDomain: "my-blog-web-c5e0d.firebaseapp.com",
  projectId: "my-blog-web-c5e0d",
  storageBucket: "my-blog-web-c5e0d.appspot.com",
  messagingSenderId: "1063404565168",
  appId: "1:1063404565168:web:d6c2b050820ec2f3b0c175"
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;