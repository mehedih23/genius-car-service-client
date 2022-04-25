// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIUXBICeYMIHYBWJiJcGEwRY3PfTl7kmo",
  authDomain: "genius-car-service-16c05.firebaseapp.com",
  projectId: "genius-car-service-16c05",
  storageBucket: "genius-car-service-16c05.appspot.com",
  messagingSenderId: "526775695047",
  appId: "1:526775695047:web:d77db820d73555cb65f0e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
