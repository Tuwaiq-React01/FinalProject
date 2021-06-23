import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Nav from './componentsPage/Nav'
import Contact from './componentsPage/Contact'
import Show from './components/Show'
import QoutesAPI from './componentsPage/QoutesAPI'
import "bootswatch/dist/darkly/bootstrap.min.css";
import Add from './components/Add'

firebase.initializeApp({
  apiKey: "AIzaSyDe8rTM7YhL4w5yeI8Vnhm671e9w7V6icE",
  authDomain: "musicfy-4b2ac.firebaseapp.com",
  projectId: "musicfy-4b2ac",
  storageBucket: "musicfy-4b2ac.appspot.com",
  messagingSenderId: "17263191525",
  appId: "1:17263191525:web:20db247baa7a9ac2ff7b0c",
  measurementId: "G-3P5FR41GP0"
})

ReactDOM.render(

  <Router>
    <Nav />
    <Route exact path="/" component={App} />
    <Route path="/contact" component={Contact} />
    <Route path="/Show" component={Show} />
    <Route path="/QoutesAPI" component={QoutesAPI} />
    <Route path="/logout" component={App} />
    <Route path="/Add" component={Add} />
  </Router>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
