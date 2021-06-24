import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "react-bootstrap/dist/react-bootstrap.min.js";
import firebase from "firebase";
import { LinkContainer } from "react-router-bootstrap";
import "./com.css";

function NavigationBar() {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#2a4d69" }}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <span className="pull-right">
                <button
                  className="btn md-4"
                  onClick={() => firebase.auth().signOut()}
                >
                  <span style={{ color: "#fff" }}> تسجيل الخروج</span>
                </button>
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          
          <Nav>
            <LinkContainer to="/add">
              <Nav.Link>إضافة </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>الصفحة الرئيسية</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
