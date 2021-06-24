import React from 'react';
import ReactDOM from 'react-dom';
import { Switch,BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App'
import About from './components/About'
import MyNavBar from './components/MyNavBar'
import reportWebVitals from './reportWebVitals';
import Home from './components/Home'
import ContactUs from './components/ContactUs';

ReactDOM.render(

  <Router>
     <Route exact path = '/' component = {App} />
     <Route exact path  = '/About' component = {About} />
     <Route exact path = '/home' component = {Home} />
     <Route exact path = '/ContactUs' component = {ContactUs} />
    <Route exact path = '/logout' component = {App} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
