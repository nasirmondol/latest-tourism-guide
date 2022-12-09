import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyOrders.css'

const MyOrders = () => {
    const  [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    useEffect(() =>{
        const getOrder = async() =>{
            const url = `http://localhost:5000/order`
            const {data} = await axios.get(url)
            setOrders(data);
        }
        getOrder()
    }, [user])
    return (
        <div>
            <br />
            <br />
            <h2 className='text-center mt-3'>Your order: {orders.length}</h2>
            {
                orders.map(order => <div className='orders w-50 mx-auto mb-4' key={order._id}>
                    <h5 className='text-center'>{order.services}</h5>
                    <h5 className='text-center'>{order.address}</h5>
                    <p className='text-center'>{order.email}</p>
                    <p className='text-center'>{order.phone}</p>
                </div>)
            }
        </div>
    );
};

export default MyOrders;