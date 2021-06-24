import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';




var firebaseConfig = {
  apiKey: "AIzaSyCum5BOMujetdqPJFiAZJoQCvW7RApI_PU",
  authDomain: "auth-5e5ac.firebaseapp.com",
  projectId: "auth-5e5ac",
  storageBucket: "auth-5e5ac.appspot.com",
  messagingSenderId: "926017767888",
  appId: "1:926017767888:web:56c4d2a97bc110e17651d5",
  measurementId: "G-Y27WWGXES2"
};

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
