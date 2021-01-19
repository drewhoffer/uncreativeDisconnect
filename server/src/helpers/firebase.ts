import firebase from "firebase";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA-BzAmF4f9v9PkdsHJjifhTxnmMm_XaWc",
    authDomain: "uncreativedisconnex.firebaseapp.com",
    projectId: "uncreativedisconnex",
    storageBucket: "uncreativedisconnex.appspot.com",
    messagingSenderId: "544907569602",
    appId: "1:544907569602:web:27586d7f279fa42db1ce5b",
    measurementId: "G-61P48DE8F2"
};

firebase.initializeApp(firebaseConfig);
firebase.auth();

export default firebase;