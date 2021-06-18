import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Dashbord from './components/Dashbord';
import Login from './Login';
import Teacher from './components/Teacher';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

ReactDOM.render(
<Router>

<Switch>
  <Route exact path="/" component={Dashbord} />
  <Route path="/student" component={Dashbord} />
  <Route path="/teacher" component={Teacher} />
  <Route path='/Logout' component={Login} />
</Switch>

</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
