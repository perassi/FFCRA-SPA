/*import {initializeApp} from 'firebase/app'
import {getFirestore, collection} from 'firebase/firestore'

export const firebaseApp = initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
})

export const db = getFirestore(firebaseApp)
export const ffcraRef = collection(db, 'ffcra-responses')*/


import firebase from "firebase/app";
import "firebase/firestore";

console.log(process.env.FIREBASE_API_KEY)

console.log(JSON.stringify({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}))

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyCFNCayV_1c2OB_JITWO23sUL1kPHZrLTQ',
    authDomain: 'erc-experts.firebaseapp.com',
    projectId: 'erc-experts',
    storageBucket: 'erc-experts.appspot.com',
    messagingSenderId: '508770200271',
    appId: '1:508770200271:web:60f427ad5a45da3ac3e5ba',
    measurementId: 'G-E164C5M7PE'
});

export const db = firebaseApp.firestore();