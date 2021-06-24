import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import NewBook from './Components/NewBook';
import EditBook from './Components/EditBook';
import Navbar from './Components/Navbar';
import './index.css';
import News from './Components/News';

ReactDOM.render(
  <Router>
    <Navbar />
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/add' component={NewBook} />
      <Route exact path='/edit/:id' component={EditBook} />
      <Route exact path='/news' component={News} />
      <Route path='/' component={App} />
      <Route />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
