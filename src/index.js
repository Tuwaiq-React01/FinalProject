import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Dashbord from './components/Dashbord';
import Login from './Login';
import Teacher from './components/Teacher';
import Student from './components/App';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Login />
    {/* <Switch>
      <Route path="/dashbord">
        <Dashbord />
      </Route>
      <Route path="/teacher">
        <Teacher />
      </Route>
      <Route path="/student">
        <Student />
      </Route>
      <Route path='/Logout' component={Login} />
    </Switch> */}

  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
