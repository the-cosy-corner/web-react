import React, { Component } from "react";
import { App } from "./App";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">The Cosy Corner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Properties" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Everton Brow</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default App;
