import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CakesList from './Components/CakesList'
import EditForm from './Components/EditForm'
import NewForm from './Components/NewForm'
import Contact from './Components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'
ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/home" component={CakesList} />
    <Route path="/edit/:id" component={EditForm} />
    <Route path="/add" component={NewForm} />
    <Route path="/contact" component={Contact} />
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
