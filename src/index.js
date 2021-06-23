import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./components/Add";
import "./App.css";
import Edit from "./components/Edit";

firebase.initializeApp({
  apiKey: "AIzaSyA07WDBFS1guDIwVYUVTGv86pvp-wJtw6A",
  authDomain: "movies-a43af.firebaseapp.com",
  projectId: "movies-a43af",
  storageBucket: "movies-a43af.appspot.com",
  messagingSenderId: "523008304821",
  appId: "1:523008304821:web:0bd0f2449a23108abd40fc",
  measurementId: "G-7MP7HPF5GE",
});
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/top_rated" component={App} />
      <Route path="/upcoming" component={App} />
      <Route path="/logOut" component={App} />
      <Route path="/add" component={Add} />
      <Route path="/edit/:key/:path" component={Edit} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
