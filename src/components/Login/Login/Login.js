import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    let errorElement;

    const location = useLocation()
    const from = location.state?.from?.pathname || ('/')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        event.target.reset()
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, { replace: true })
    }

    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('Please enter your email address')
        }
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
                <p>{errorElement}</p>

                <Button className='reg-btn w-50 mb-3 d-block mx-auto' variant="warning" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center'>Forgot Password?
                <br />
                <Link onClick={resetPassword} className='text-primary text-decoration-none'>Reset your Password</Link></p>
            <br />

            <p className='text-center'>New to our site?
                <br />
                <Link className='text-primary text-decoration-none' to='/register'>Please Register</Link></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;