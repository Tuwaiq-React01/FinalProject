import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Create from './pages/Create'
import Details from './pages/Details'
import Profile from './pages/Profile'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/create" component={Create} />
      <Route path="/Details/" component={Details} />
      <Route path="/Profile" component={Profile} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
