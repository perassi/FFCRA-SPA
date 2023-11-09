import firebase from "firebase/app";
import "firebase/firestore";

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