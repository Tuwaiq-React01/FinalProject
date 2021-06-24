import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Nav, Navbar } from 'react-bootstrap';
import '../App.css';
export default function nav() {
    return (
        <div>
            <nav className="nav">
                <Nav.Link className="nav-home" href="/home">Home</Nav.Link>
                <Nav.Link className="nav-home" href="/add">Add item</Nav.Link>
                <Navbar.Brand className="brand-nav" href="/home">The Cake Store</Navbar.Brand>
                <Nav.Link className="contact-nav" href="/contact">Contact</Nav.Link>
            </nav>
        </div>
    )
}
