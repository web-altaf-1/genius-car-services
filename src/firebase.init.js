// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfMPdQFZbvdoxMvpTxfGi9PGO8KPrbl9E",
  authDomain: "genius-car-services-a7ebb.firebaseapp.com",
  projectId: "genius-car-services-a7ebb",
  storageBucket: "genius-car-services-a7ebb.appspot.com",
  messagingSenderId: "878308181739",
  appId: "1:878308181739:web:9a6b75892672ff0c0720ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const auth = getAuth(app);

export default auth ; 