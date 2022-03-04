// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAC7yqpl-8ott_ijIGRwEFnDAAPwo9VfwI",
    authDomain: "linkedin-clone-687da.firebaseapp.com",
    projectId: "linkedin-clone-687da",
    storageBucket: "linkedin-clone-687da.appspot.com",
    messagingSenderId: "1052668197010",
    appId: "1:1052668197010:web:96239cdb316baab66fce4b",
    measurementId: "G-Q86GD455JQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };