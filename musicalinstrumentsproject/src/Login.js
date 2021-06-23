import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import "./App.css";
export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const responseFacebook = (response) => {
    if (response.status !== "unknown") {
      setName(response.name);
      setEmail(response.email);
      setToken(response.accessToken);
    } else {
      console.log("you are not singned in");
    }
  };

  return (<center>
    <div class="card text-center" style={{width:500+"px"}}>
      
      <h4 class="card-header" style={{ backgroundColor: "black" , marginTop:20+"px"}}>
        Login
      </h4>
      
      <div class="card-body" style={{ paddingTop: 30 + "px" }}>
        <FacebookLogin
          appId="549489506414911"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </div>
      <div class="card-footer text-muted">
        {token ? (
          <div>
            <h3>Welcome {name}</h3>
            <h3>The email {email} </h3>
          </div>
        ) : null}
      </div>
     
    </div> </center>
  );
}