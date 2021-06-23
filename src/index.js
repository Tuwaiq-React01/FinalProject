import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAq5BE2YrCcCX0sQS-jgsCweUdlg8q4FaE",
  authDomain: "encryptbase-e7b13.firebaseapp.com",
  projectId: "encryptbase-e7b13",
  storageBucket: "encryptbase-e7b13.appspot.com",
  messagingSenderId: "308242979036",
  appId: "1:308242979036:web:127c67a5d5d884312cfc19"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
