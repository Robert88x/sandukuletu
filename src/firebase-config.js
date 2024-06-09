// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "@firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCslcx660Hm_TRyTB4sQ3ZBKZCUsWxG_e4",
    authDomain: "kitaa-chetu.firebaseapp.com",
    projectId: "kitaa-chetu",
    storageBucket: "kitaa-chetu.appspot.com",
    messagingSenderId: "686928887905",
    appId: "1:686928887905:web:41e03dc36d495749dbaa20",
    measurementId: "G-RQYJ711K01"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore;
export const auth = firebaseApp.auth();
// export const db = getFirestore(app);





