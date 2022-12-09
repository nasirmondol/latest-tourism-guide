import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useServiceDetails from '../../hooks/useServiceDetails';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [services] = useServiceDetails(serviceId)
    const [user] = useAuthState(auth);

    if (user) {
        console.log(user)
    }

    const handleSubmit = event => {
        event.preventDefault()
        const order = {
            email: user.email, 
            services: services.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const  {data} = response
                if(data.insertedId){
                    toast('Your order is booked!!')
                    event.target.reset()
                }
            })
    }
    return (
        <div className='mt-5 w-50 mx-auto'>
            <br />
            <h2 className='text-center mt-5 mb-4'>Please order: {services.name}</h2>
            <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <input className='w-100 mb-3' type="text" value={user?.displayName} placeholder='name' name='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-3' type="text" value={user?.email} placeholder='name' name='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-3' type="text" value={services.name} placeholder='service' name='service' required readOnly disabled />
                <br />
                <input className='w-100 mb-3' type="text" name='address' placeholder='address' required autoComplete='off' />
                <br />
                <input className='w-100 mb-3' type="number" name='phone' placeholder='Phone Number' required autoComplete='off' />
                <br />
                <input className='w-100 mb-5 bg-success text-light' type="submit" value="Order" />
            </form>
            <ToastContainer/>
        </div>
    );
};

export default CheckOut;