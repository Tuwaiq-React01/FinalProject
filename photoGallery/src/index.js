import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Contact from './Contact';
import Photo from './Photo';
import EditDelete from './EditDelete'


ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/contact" component={Contact} />
    <Route path="/logout" component={App} />
    <Route path="/Photo" component={Photo}/>
    <Route path="/EditDelete" component={EditDelete}/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
