import React from 'react';
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { InputGroup, Input, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import firebase from 'firebase';

const Navbar = (props) => {
    const styles = {
        width: 300,
        marginTop: 10,
        marginBottom: 5,
        marginRight : 100
    };
    const font_style = 
    {
        fontSize : 22
    }
    return (
        <Nav id='fixed-top' fill >
            <Nav.Item id='navtabs' className="ml-5" style = {font_style}>
                <Nav.Link onClick={() => props.handleFilterClick('all')} >All Games</Nav.Link>
            </Nav.Item>
            <Nav.Item id='navtabs' className="mr-5" style = {font_style}>
                <Nav.Link onClick={() => props.handleFilterClick('fav')}>Favourite Games</Nav.Link>
            </Nav.Item>
            <InputGroup inside style={styles}>
                <Input placeholder="Game name" onChange={(event) => props.handleSearchClick(event)} />
                <InputGroup.Button>
                    <Icon icon="search" />
                </InputGroup.Button>
            </InputGroup>
            <Nav.Item id='navtabs' className="mr-5">
                <Nav.Link onClick={() => firebase.auth().signOut()} style = {font_style}>Sign Out</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
export default Navbar;