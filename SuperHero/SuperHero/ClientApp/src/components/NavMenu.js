import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import DarkModeToggle from "react-dark-mode-toggle";
import 'bootstrap/dist/css/bootstrap.css'
import { InputGroup, Input, Icon,Button,Badge } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const NavMenu = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  let history = useHistory();
  const styles = {
    width: 300,
    marginTop: 30,
    marginBottom: 5
};
  
  isDarkMode ? document.body.style.backgroundColor = "rgb(26, 28, 34)" : document.body.style.backgroundColor = "white"
  return (
    <Nav id='fixed-top' fill>
    <Nav.Item id='navtabs'>
        <Nav.Link onClick={()=> history.push("/")} >All Heros</Nav.Link>
    </Nav.Item>
    <InputGroup inside style={styles}>
        <Input placeholder="Hero name" onChange={(event) => props.handleSearchClick(event)} />
        <InputGroup.Button>
            <Icon icon="search" />
        </InputGroup.Button>
    </InputGroup>
    <Nav.Item id='navtabs'>
    <Badge content={props.fight}>
      {/* <Button>New Message</Button> */}
        <Nav.Link onClick={()=> history.push("/Fight")}>Fight</Nav.Link>
    </Badge>
    </Nav.Item>
    < div style={{marginTop: 10, marginRight: 10}}>
    <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={80}
      />
      </div>
</Nav>
    // <Navbar style={{ marginBottom: "40px" }} collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="#home">Hero</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //     </Navbar.Collapse>
    //   </Container>
    //   <DarkModeToggle
    //     onChange={setIsDarkMode}
    //     checked={isDarkMode}
    //     size={80}
    //   />
    // </Navbar>
  );
}

export default NavMenu;