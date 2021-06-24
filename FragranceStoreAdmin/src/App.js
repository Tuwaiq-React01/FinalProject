import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import { Navbar, Nav } from 'react-bootstrap'
import { Link,BrowserRouter as  Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import logo from './img/logo.png'



export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            picture: "",
            token:""
        };
    }

    //we want the didMount
    componentDidMount=()=>{

        if(localStorage.getItem("token")){
            this.setState({token: localStorage.getItem("token")})
            this.setState({name: localStorage.getItem("name")})
            this.setState({picture: localStorage.getItem("picture")})
            this.setState({email: localStorage.getItem("email")})
        }
    }

    //if updated
    componentDidUpdate = () => {
        if (this.state.token){
            localStorage.setItem("token" , this.state.token)
            localStorage.setItem("name" , this.state.name)
            localStorage.setItem("email" , this.state.email)
            localStorage.setItem("picture" , this.state.picture)
        }
    }

     responseFacebook = (response) => {
         if(response.status !=="unknown"){
            alert("YOU ARE LOGGED IN SUCCESSFULLY !!!")
            console.log(response);
            
            this.setState({name: response.name})
            this.setState({email: response.email})
            this.setState({picture: response.picture.data.url})
            this.setState({token : response.accessToken})

            
         }
         else{
            alert("You are not signed in")
         }
      }

    
    render() {
     
        return (
            <center>      
                {
                    this.state.token ? <Home name={this.state.name} /> :
                    
                    <div >
                    <Navbar className="rounded  bg-light" collapseOnSelect expand="lg" variant="light" >
                        <Navbar.Brand as={Link} to="/" >
                        <img className="logo" src={logo} width="300" />
                        </Navbar.Brand>
                        
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Link to="/components/About" className="text-dark">About</Link>
                            </Navbar.Collapse>
                        </Navbar>
                        <FacebookLogin
                    appId="200067995305467"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook} />
                    </div>
                }

            </center>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}






