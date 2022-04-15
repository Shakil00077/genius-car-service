// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDe6SdJxHOLxgF26fV7d9YQK8pthyqFpq4",
    authDomain: "genius-car-services-b208c.firebaseapp.com",
    projectId: "genius-car-services-b208c",
    storageBucket: "genius-car-services-b208c.appspot.com",
    messagingSenderId: "371872076740",
    appId: "1:371872076740:web:508ffccfe2f64cdca6ca91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;