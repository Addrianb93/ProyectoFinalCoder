import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className='navbar-brand' to="/">Concesionario Berardo</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className='nav-link' to="./category/ford">Ford</Link>
            <Link className='nav-link' to="./category/chevrolet">Chevrolet</Link>
            <Link className='nav-link' to="./category/peugeot">Peugeot</Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
