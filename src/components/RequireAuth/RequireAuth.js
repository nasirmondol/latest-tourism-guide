import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    if (user.providerData[0]?.providerId === 'password' && !user?.emailVerified) {
        return <div className='mt-5'>
            <h3 className='text-danger text-center'>Your email address is not verified</h3>
            <h4 className='text-primary text-center'>Please verify your email</h4>
            <button
            className='btn btn-primary d-block mx-auto'
                onClick={async () => {
                    const success = await sendEmailVerification();
                    if (success) {
                        toast('Sent email');
                    }
                }}
            >
                Email verification send again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;

};

export default RequireAuth;