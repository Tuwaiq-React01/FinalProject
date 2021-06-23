import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from './Profile';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { AuthProvider } from "./Auth";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import NavBar from "./NavBar";
import {Provider as AlertProvider} from "react-alert";

ReactDOM.render(

    <React.StrictMode>
        <NavBar/>
        <AuthProvider>
            <Router>
                <Route exact path={'/login'} component={Login}/>
                <PrivateRoute exact path={'/'} component={App}/>
                <PrivateRoute exact path={'/profile'} component={Profile}/>
            </Router>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
