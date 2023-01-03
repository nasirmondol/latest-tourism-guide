import React from 'react';
import { Button } from 'react-bootstrap';
import useService from '../../hooks/useService/useService';

const ManageService = () => {
    const [services, setServices] = useService([]);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you want to sure delete?')
        if(proceed){
            const url = `https://latest-tourism-guide-server.vercel.app/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
            })
        }
    }

    return (
        <div className='mt-5 w-50 mx-auto'>
            <h2 className='mt-5'>Manage your service</h2>
            {
                services.map(service => <div key= {service._id}>
                    <h6>{service.name} <button onClick={() =>handleDelete(service._id)}>X</button> </h6>
                </div>)
            }
        </div>
    );
};

export default ManageService;