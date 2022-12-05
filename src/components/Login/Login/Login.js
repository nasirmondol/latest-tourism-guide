import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <div className='register w-50 mx-auto'>
            <h2 className=' text-center text-primary'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='reg-btn w-50 mb-3' variant="warning" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to our site? <Link className='text-warning text-decoration-none' to='/register'>Please Register</Link></p>
        </div>
    );
};

export default Login;