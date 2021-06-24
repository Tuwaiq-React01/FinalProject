// import axios from 'axios';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookLogin from 'react-facebook-login'
import Get from './Components/Get';
// import Login from'./Components/LoginForm.css'
//import Home from './Components/Home';
import './App.css';

export default class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          name:"",
          email:"",
          picture:"",
          token:""// مفتاح الاتصال 
      }
  }
  //we want the didMount
  componentDidMount=()=>{
      if(localStorage.getItem("token")){
          this.setState({token: localStorage.getItem("token")})
          this.setState({name: localStorage.getItem("name")})
          this.setState({picture: localStorage.getItem("Picture")})
          this.setState({email: localStorage.getItem("email")})
      }
  }
  //if updated
  componentDidUpdate = () => {
      if (this.state.token){
          localStorage.setItem("token" , this.state.token)
          localStorage.setItem("name" , this.state.name)
          localStorage.setItem("email" , this.state.email)
          localStorage.setItem("Picture" , this.state.picture)
      }
  }
   responseFacebook = (response) => {
       if(response.status !=="unknown"){
          console.log(response);
          this.setState({name: response.name})
          this.setState({email: response.email})
          this.setState({picture: response.picture.data.url})
          this.setState({token : response.accessToken})
       }
       else{
          console.log("You are not signed in")
       }
    }
  render() {

  return (
    
  <center className="bg-info">
    <div className="container">
        
    
                  this.state.token ? <Get /> : <FacebookLogin
                  appId="362293015241436"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={this.responseFacebook} ClassName=" Facbook login " 
                  />
        
</div>
</center>   
      )}}
