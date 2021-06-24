import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Switch , Route , BrowserRouter as Router} from 'react-router-dom'
import Update from './Update'
import MyNavBar from './MyNavBar';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import FacebookLoginPage from './FacebookLogin'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<Router>
<MyNavBar />
<Switch>
  <Route exact path="/AboutUs">
  <AboutUs />
  </Route>
  <Route exact path="/ContactUs">
  <ContactUs />
  </Route>
  <Route exact path="/Authenticate">
  <FacebookLoginPage/>
  </Route>
  <Route exact path="/">
  <App />
  </Route>
  <Route path='/Update/:id' component={Update} >
  </Route>
  </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


