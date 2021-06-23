import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavbarHeader from './NavbarHeader'
import {Route, Link , BrowserRouter as Router} from 'react-router-dom'
import About from './About'
import Contacts from './Contacts'
import EmployeeList from './EmployeeList'
import  SignUp from './SignUp'
import AddNewEmolyee from './AddNewEmolyee'
import ShowBook from './ShowBook'
ReactDOM.render(
  <Router>
    <NavbarHeader />
    <Route exact path='/' component={App}></Route>
    <Route path='/About' component={About} ></Route>
    <Route path='/Contacts' component={Contacts} ></Route>
    <Route path='/EmployeeList' component={EmployeeList} ></Route>
    <Route path='/SignUp' component={SignUp} ></Route>
    <Route path='/AddNewEmolyee' component={AddNewEmolyee} ></Route>
    <Route path='/ShowBook' component={ShowBook} ></Route>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
