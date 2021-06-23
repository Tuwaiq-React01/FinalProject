import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link> |       <Link style={linkStyle} to="/" onClick={()=>{firebase.auth().signOut()}} >Sign out</Link>

        </header>
    )
};

const headerStyle = {
    background: "#053742",
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

export default Header;