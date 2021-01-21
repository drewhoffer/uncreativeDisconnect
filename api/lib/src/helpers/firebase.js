"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = __importDefault(require("firebase"));
require("firebase/auth");
const firebaseConfig = {
    apiKey: "AIzaSyA-BzAmF4f9v9PkdsHJjifhTxnmMm_XaWc",
    authDomain: "uncreativedisconnex.firebaseapp.com",
    projectId: "uncreativedisconnex",
    storageBucket: "uncreativedisconnex.appspot.com",
    messagingSenderId: "544907569602",
    appId: "1:544907569602:web:664bd87c4d0ee076b1ce5b",
    measurementId: "G-VZNRC48HZL"
};
firebase_1.default.initializeApp(firebaseConfig);
firebase_1.default.auth();
exports.default = firebase_1.default;
//# sourceMappingURL=firebase.js.map