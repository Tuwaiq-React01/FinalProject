import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import MovieList from './MovieList';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import Add from './Add';




ReactDOM.render(
  <Router>
     <Header/>
      <Route exact path="/movielist" component={MovieList} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/Add" component={Add} />
      <Footer/>
  </Router>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
