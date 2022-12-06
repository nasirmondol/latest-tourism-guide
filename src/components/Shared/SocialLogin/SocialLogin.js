import React from 'react';
import { Button } from 'react-bootstrap';
import google from '../../../images/Social/google.png'
import gitHub from '../../../images/Social/GitHub.png'
import faceBook from '../../../images/Social/Facebook.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    if(loading || gitLoading){
        return <Loading></Loading>
    }


    if (error){    
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }

    if(gitUser){
        errorElement = <div>
        <p className='text-danger'>Error: {gitError?.message}</p>
    </div>
    }


    if (user) {
       navigate('/home')
    }

    if(gitUser){
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center mx-auto'>
                <div style={{ height: '1px' }} className='bg-primary w-50 mx-auto'></div>
                <p className='mt-2 px-2 mx-auto'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 mx-auto'></div>
            </div>
            <p>{errorElement}</p>
            <div>
                <Button onClick={() => signInWithGoogle()} className='d-block mx-auto btn btn-primary w-50 mb-3'>
                    <img width={20} className='mx-2' src={google} alt="" />
                    Google Sign In
                </Button>
            </div>
            <div>
                <Button onClick={() => signInWithGithub()} className='d-block mx-auto btn btn-success w-50 mb-3'>
                    <img width={20} className='mx-2 rounded-circle' src={gitHub} alt="" />
                    Github Sign In
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;