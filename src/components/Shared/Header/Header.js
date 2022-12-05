import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from '../../../images/icon/tourism icon (1).png'

const Header = () => {
    return (
        <div >
            <Navbar className='mb-3' fixed='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img className='me-20 rounded-circle' width={40} src={icon} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/orders">My orders</Nav.Link>
                            <Nav.Link as={Link} to="/manage">Manage orders</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                            <Nav.Link as={Link} to="register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;