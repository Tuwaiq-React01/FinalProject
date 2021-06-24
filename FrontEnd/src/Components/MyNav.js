import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function MyNav() {
    return (

              <Navbar variant="light" className="text-dark ">
    <Container className="p-4 justify-content-start bg-light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav >
          <Link className="nav" to="/">Home</Link>
          <Link className="nav" to="/LogIn">LogIn</Link> 
          <Link className="nav" to="/Add">Add</Link>
    </Nav>
    </Container>
  </Navbar>
    )
}
