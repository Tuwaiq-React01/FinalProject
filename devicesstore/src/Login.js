import FacebookLogin from 'react-facebook-login';
import React, { Component } from 'react'
import Header from './Header.js';

export default class Login extends Component {
  constructor(propes){
    super(propes);
    this.state={
      name:"",
      email :"",
      picture :"",
      token:""
    }
  }
   responseFacebook = (response) => {
     if(response.status !== "unknown"){
    this.setState({name : response.name})
    this.setState({email : response.email})
    this.setState({picture : response.picture.data.url})
    this.setState({token : response.accessToken})
     }
     else{
  console.log("You are not sign in");
     }
}
  render() {
    return (
      <div>
        <center>
        <Header/>
          <h1>Login</h1>
 
         <FacebookLogin
    appId="385516509503717"
    autoLoad={false}
    fields="name,email,picture"
    callback={this.responseFacebook} />, 

          {this.state.token ?
          <div>
                    <h5>Welcome {this.state.name} </h5>
                    <img src={this.state.picture} alt=""></img>
                    <h5> {this.state.email} is authorized </h5>
          </div>
          :null}
          
    </center>
      </div>
    )
  }
}