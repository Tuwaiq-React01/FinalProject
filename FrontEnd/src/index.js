import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Get from './Components/Get';
import Add from './Components/Add';
import Home from './Components/Home';
import Edit from './Components/Edit';
import MyNav from './Components/MyNav';
//import Login from './Components/LogIn'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

    <Router>
    <Home/>
    <div className="bg-info">
    <MyNav/>
     <Route exact path='/' component={ App } /> 
    <Route path='/Get'component={Get}/>
    <Route path='/Add'component={Add}/>
    <Route path='/Edit/:id' component={Edit} />
   </div>
  </Router>,
 document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
