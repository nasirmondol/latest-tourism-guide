import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import icon from '../../../images/icon/tourism icon (1).png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSingOut = () => {
        signOut(auth)
    }
    return (
        <div className='mb-0'>
            <Navbar className='mb-0' fixed='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img className='rounded-circle' width={40} src={icon} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/more">More service</Nav.Link>
                        </Nav>
                        <Nav>

                            {
                                user ?
                                    <div className='d-flex'>
                                        <Button onClick={handleSingOut}>Log out</Button>
                                        <Nav.Link as={Link} to="/orders">My orders</Nav.Link>
                                        <Nav.Link as={Link} to="/manage">Manage orders</Nav.Link>
                                        <Nav.Link as={Link} to="/addservice">Add new service</Nav.Link>
                                    </div> :

                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>

                            }

                            <Nav.Link as={Link} to="register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;