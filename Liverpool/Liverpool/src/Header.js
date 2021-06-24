import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/movielist">Liverpool Football Players</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/movielist">Home</Nav.Link>
                    <Nav.Link href="/Add">Add</Nav.Link>
                    <Nav.Link href="/Login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
