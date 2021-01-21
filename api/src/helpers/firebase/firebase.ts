/**
 * @file This file exports the initialized firebase module.
 * @author Trent Thompson
*/



// Installed imports
import firebase from "firebase";
import "firebase/auth";

// Initialize the firebase module
const firebaseConfig = {
    apiKey: "AIzaSyA-BzAmF4f9v9PkdsHJjifhTxnmMm_XaWc",
    authDomain: "uncreativedisconnex.firebaseapp.com",
    projectId: "uncreativedisconnex",
    storageBucket: "uncreativedisconnex.appspot.com",
    messagingSenderId: "544907569602",
    appId: "1:544907569602:web:664bd87c4d0ee076b1ce5b",
    measurementId: "G-VZNRC48HZL"
};

firebase.initializeApp(firebaseConfig);
firebase.auth();

export default firebase;