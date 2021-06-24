import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import firebase from 'firebase';
import { StyledFirebaseAuth } from 'react-firebaseui'
import "bootswatch/dist/sketchy/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css" 
import Add from './components/add';
import Quote from './components/Quote';
import QuotesAxios from './QuotesAxios';

firebase.initializeApp({

  apiKey: "AIzaSyBBaz_l3VBSanZqDK08GcYKiswbo9akzwc",
  authDomain: "crud-project-14efe.firebaseapp.com",
  projectId: "crud-project-14efe",
  storageBucket: "crud-project-14efe.appspot.com",
  messagingSenderId: "89230386407",
  appId: "1:89230386407:web:8981b52ee674b8d8746e42",
  measurementId: "G-CX0HZ9FJ9W"

})

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Quoter</a>

            <div className="  navbar-collapse" id="navbarColor01" >
              <ul className="navbar-nav mr-auto" >
                <li className="  nav-item">
                  <a className="nav-link active" href="#"><Link style={{ color: "white" }} to="/">Home</Link>
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="  nav-item">
                  <a className="nav-link" href="#"><Link style={{ color: "white" }} to="/Quote">Quotes</Link></a>
                </li>
                <li className="  nav-item">
                  <a className="nav-link" href="#">  <Link style={{ color: "white" }} to="/QuotesAxios">More Quotes</Link></a>
                </li>
                <li className="  nav-item">
                  <a className="nav-link" href="#">  <Link style={{ color: "white" }} to="/Add">Add a Quote</Link></a>
                </li>
              
              </ul>
            </div>
          </div>
        </nav>
                <button  type="button" class="btn btn-outline-light" onClick={() => firebase.auth().signOut()}>
                    Sign Out
                </button>
        
      </div>

     

      <Switch>

        <Route exact path='/' component={App} />
        <Route path='/Add' component={Add} />
        <Route path='/QuotesAxios' component={QuotesAxios} />
        <Route path='/Quote' component={Quote} />

      </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
