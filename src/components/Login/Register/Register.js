import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleName = event => {
        setName(event.target.value);
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        event.target.reset();
    }

    return (
        <div className='register w-50 mx-auto'>
            <h2 className=' text-center text-primary'>Please Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleName} type="name" placeholder="Enter name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='reg-btn w-50 mb-3' variant="warning" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already register? <Link className='text-warning text-decoration-none' to='/login'>Please Login</Link></p>
        </div>
    );
};

export default Register;