import React, { useCallback, useContext } from "react";
import {signInWithGoogle} from './Firebase'
import btn from "./btn_google.png"
import './App.css'
import {  Redirect } from "react-router-dom";
import {app} from "./Firebase.js";
import { AuthContext } from "./Auth.js";

function Login(props) {

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div className={'google'}>
            <img src={btn} className="login-provider-button" onClick={signInWithGoogle}/>
        </div>
    );
}

export default Login;