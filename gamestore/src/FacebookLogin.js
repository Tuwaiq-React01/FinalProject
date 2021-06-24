import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import App from './App'

export default function FacebookLoginPage() {

  const [username, setUsername] = useState(0);
  const [email, setEmail] = useState(0);
  const [avatar, setAvatar] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? (

    <App></App>

  ) : (

    <div style={{ position: "absolute", left: "30%", top: "25%"  }}>
      <div className=" box-shadow bg-white pl-4 pr-4 pt-2 pb-2 container">
        <form className="m-5">
          <div className="mb-3">
            <h2> Login </h2>
            <hr></hr>
            <label className="form-label">Email: </label>
            <input type="text" className="form-control" id="name" />
            <label className="form-label">Password: </label>
            <input type="text" className="form-control" id="productdetails" />
          </div>
          <button type="submit" className="btn btn-dark">login</button>
          <hr></hr>
        </form>
        <center>
       
        <FacebookLogin
          appId="1743921975796236"
          autoLoad={false}
          fields="name,email,picture"
          callback={

            (response) => {
              console.log(response);
              setUsername(response.name)
              setEmail(response.email)
              setAvatar(response.picture.data.url)
              setLoggedIn(true)
            }
          }
        />
      </center>
      </div>
      <br></br>
    

    </div>

  );
}
