// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXLUQcfsCniltAnA94lUGkY7JEDLRfjTg",
    authDomain: "accounting-service-provider.firebaseapp.com",
    projectId: "accounting-service-provider",
    storageBucket: "accounting-service-provider.appspot.com",
    messagingSenderId: "73247157261",
    appId: "1:73247157261:web:07121ec9d7a1079f4eb944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;