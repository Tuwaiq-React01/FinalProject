import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Signin from "./Signin";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";
// import

firebase.initializeApp({
  apiKey: "AIzaSyBvv2LR8_S8kNtN6y5jxuqTi54C4YuotEs",
  authDomain: "reactapp-84ff4.firebaseapp.com",
  projectId: "reactapp-84ff4",
  storageBucket: "reactapp-84ff4.appspot.com",
  messagingSenderId: "525340867997",
  appId: "1:525340867997:web:6f11b7c10ae12d1be90374",
  measurementId: "G-V228ZX87D0",
});

ReactDOM.render(
  <React.StrictMode>
    
    <div dit="rtl">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
      crossorigin="anonymous"
    />
    <Signin />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
