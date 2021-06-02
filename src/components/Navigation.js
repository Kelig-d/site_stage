import React from 'react';
import {NavLink } from 'react-router-dom';
import {Nav, NavDropdown, Form,FormControl,Button, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/components/_navigation.scss';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={NavLink} to="/" exact>Armor Productions</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto ml-auto">
      <NavDropdown title="Création de sites webs" id="basic-nav-dropdown">
        <NavDropdown.Item as={NavLink} to="/Web" exact>Site vitrine</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} to="/Web" exact>Boutique en ligne</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} to="/Web" exact>Portfolio</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={NavLink} to="/prestations_autre" exact>Prestations multimédias
      </Nav.Link>
    </Nav>
    <Nav>
        <Nav.Link as={NavLink} to="/contact" exact>Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Navigation;