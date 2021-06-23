import React from 'react'
import { Container, Row, Col, Form, Alert,Navbar ,Nav,NavDropdown} from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home';
import ImageIcon from '@material-ui/icons/Image';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExploreIcon from '@material-ui/icons/Explore';

export default function NavBar(props) {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                  <Link to="/"  ><Navbar.Brand href="/"><HomeIcon/></Navbar.Brand></Link> 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            
                          
                        </Nav>
                        <Nav>
                         <Nav.Link as={Link} to="/Allimages"> Images <ImageIcon/></Nav.Link>
                         <Nav.Link as={Link} to="/Randomimage"> Explore <ExploreIcon/></Nav.Link>
                         {props.isLoggedIn?
                         
                            <>
                        <NavDropdown title={<AccountCircleIcon/>} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/Profile">My profile <PersonIcon/> </NavDropdown.Item>
                                
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/home" style={{color:"red"}} onClick={() => {
                                  console.log("Logging Out!");
                                  localStorage.removeItem("jwtToken");
                                  props.loginCallback();
                                }}>Logout <ExitToAppIcon/></NavDropdown.Item>
                            </NavDropdown>
                            </>
                            :
                            <>
                            <Nav.Link as={Link} to="/login">sign in</Nav.Link>
                            <Nav.Link as={Link} to="/signup">sign up</Nav.Link>
                            </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
