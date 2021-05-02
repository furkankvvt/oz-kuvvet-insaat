import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDOIqf19j7YlTY1XLje251VgFfTAMJpzcA",
  authDomain: "oz-kuvvet-insaat.firebaseapp.com",
  projectId: "oz-kuvvet-insaat",
  storageBucket: "oz-kuvvet-insaat.appspot.com",
  messagingSenderId: "226695845238",
  appId: "1:226695845238:web:1d38c29a8d3c04ff6d9657",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

ReactDOM.render(<App db={db} />, document.getElementById("root"));
