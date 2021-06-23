import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export default function Register(props) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);



    const submit = (e) => {
        e.preventDefault();
        
        axios.post("https://localhost:44384/api/register", {
            username,
            email,
            password
        }).then(res => {
            console.log(res);
            setRedirect(true);
            
        }).catch(err => console.log(err));
        
    }

    if(redirect){
        return <Redirect to="/login" />;
    }

  return (
    <div className="row mt-4">
      <div className="col-4"></div>
      <div className="col-4">
        <h1 className="display-4">Register</h1>

        <form>
          <div class="mb-3">
            <label for="InputUsername" class="form-label">
              Username
            </label>
            <input class="form-control" id="InputUsername" onChange={(e) => {setUsername(e.target.value)}}/>
          </div>

          <div class="mb-3">
            <label for="InputEmail1" class="form-label">
              Email address
            </label>
            <input type="email" class="form-control" id="InputEmail1" onChange={(e) => {setEmail(e.target.value)}}/>
          </div>
          <div class="mb-3">
            <label for="InputPassword1" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="InputPassword1" onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
          <button type="submit" class="btn btn-primary" onClick={submit}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
