import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookLogin from 'react-facebook-login';
export default function Login() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [picture, setPicture] = useState('');
   const [token, setToken] = useState('');
  const responseFacebook = (response) => {
    if (response.status !== "unknown") {
      setName(response.name )
      setEmail( response.email )
      setPicture(response.picture.data.url )
      setToken(response.accessToken)
    }
    else {
      console.log("you are not singned in");
    }
 }
     return (
        <div className="login pt-3">
        <center>
        <h1>Login</h1>
        <br></br>
    <FacebookLogin
    appId="135275661915406"
    autoLoad={false}
    fields="name,email,picture"
    callback={responseFacebook} />,
    {token?
    <div>
    <h3>Welcome {name}</h3>
    <img className="ig" src={picture}></img>
    <h5>The email {email} is authorized</h5>
    <br></br>
    </div>
    : null}
      </center>
      <br></br>
      </div>
    )
}