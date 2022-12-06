import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    
    if(loading || updating){
        return <Loading></Loading>
    }

    const handleName = event => {
        setName(event.target.value);
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = async event => {
        event.preventDefault();
        event.target.reset();
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        navigate('/home')
    }

    if(user){
        console.log('user', user)
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

                <input onClick={() =>setAgree(!agree)} type="checkbox" name="" id="" />
                <label className={`ps-2 ${!agree ? ''  : 'text-primary' }`} htmlFor="">Accept Latest Tourism Guide terms & conditions</label>

                <Button disabled={!agree} className='reg-btn w-50 mb-3 d-block mx-auto mt-3' variant="warning" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center'>Already register? 
            <br />
            <Link className='text-primary text-decoration-none' to='/login'>Please Login</Link></p>
            <SocialLogin />
        </div>
    );
};

export default Register;