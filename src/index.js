import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import AddToListComponent from './Components/AddToListComponent';
import GetListComponent from './Components/GetListComponent';
import UpdateItemListComponent from './Components/UpdateItemListComponent';
import HomeComponent from './Components/HomeComponent';
ReactDOM.render(
  <Router>
    <Route exact path='/' component={App}></Route>
    <Route path='/AddToListComponentout' component={AddToListComponent} ></Route>
    <Route path='/GetListComponent' component={GetListComponent} ></Route>
    <Route path='/UpdateItemListComponent/:id' component={UpdateItemListComponent} ></Route>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();