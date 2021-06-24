import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Facebooklogin from './FacebookLogin';
import { Link } from 'react-router-dom'
import '../App.css';


export default function Navbar1() {
    const logout = () => {
        localStorage.clear()
    }
    return (
        <div className="mydiv" style={{ height: 400 }}>
            <Navbar className="mynav">
                <Container>
                    <Navbar.Brand style={{ color: 'white', fontSize: "xx-large" }}>bookshelf</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav >
                            <Nav.Link ><Link style={{ color: 'white' }} to="/">Home</Link></Nav.Link>
                            <Nav.Link ><Link style={{ color: 'white' }} to="/add">Add New Book</Link></Nav.Link>
                            <Nav.Link ><Link style={{ color: 'white' }} to="/news">News Page</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="d-flex align-items-center">
                        {localStorage.getItem("token") ?
                            <Link to="/" onClick={logout}><Button style={{ backgroundColor: "#9e1f44", fontSize: 20, borderStyle: "none" }}>LogOut</Button></Link>
                            : <Facebooklogin />}
                    </div>
                </Container>
            </Navbar>
            <br />
            <br />
            <br />
            <center><div className="sitename">Learn Forever ..</div></center>
        </div>
    )
}
