import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

const HeadNav = (props) => (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Boggle</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#profile">Profile</Nav.Link> 
        <Nav.Link href="#login">Login</Nav.Link>
      </Nav>
    </Navbar> 
);

export default HeadNav;