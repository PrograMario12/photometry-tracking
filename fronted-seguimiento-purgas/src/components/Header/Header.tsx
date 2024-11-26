import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/images/magna-logo.png';

const Header: React.FC = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src= {logo}
                        width="200"
                        className="d-inline-block align-top"
                        alt="Magna logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} className="nav-link" to="/">Inicio</Nav.Link>
                        <Nav.Link as={NavLink} className="nav-link" to="/register">Registrar</Nav.Link>
                        <Nav.Link as={NavLink} className="nav-link" to="/priority">Prioridad</Nav.Link>
                        <Nav.Link as={NavLink} className="nav-link" to="/final">Finalizar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;