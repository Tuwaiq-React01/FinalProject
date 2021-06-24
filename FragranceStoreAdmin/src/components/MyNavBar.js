import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link,BrowserRouter as  Router, Switch, Route } from 'react-router-dom'  
import logo from './../img/logo.png'
import ContactUs from './Home'
import App from '../App'



export default function MyNavBar(props) {

    function logout(){
        localStorage.clear()
    }
    return (
        <Router>
        <Navbar collapseOnSelect expand="lg" variant="light" className="rounded  bg-light" >
            <Navbar.Brand as={Link} to="/" >
                <img className="logo" src={logo} width="300" alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home" className="text-dark">Home</Nav.Link>
                    <Nav.Link as={Link} to="/ContctUs" className="text-dark">Contact Us</Nav.Link>
                    <Nav.Link as={Link} to="/Logout" className="text-dark">logout</Nav.Link>

                    {/* <Nav.Link as={Link} to="/logout" className="text-dark" onClick={logout()}>Logout</Nav.Link> */}
                    
                <div className="profile d-flex justify-content-end algin-items-end">
                    <h3>Hello! {props.name}</h3>
                    <p>{props.email}</p>
                </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
        </Router>
    )
}