import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services')
        .then(res => res.json())
        .then(data => {
            const details = data.find(details => details.id == serviceId)
            setServices(details)
        })
    }, [])

    return (
        <div className='App mt-5'>
            <img width={300} height={300} src={services.img} alt="" />
            <h2>{services.name}</h2>
            <h6>Price: ${services.price}</h6>
            
        </div>
    );
};

export default ServiceDetails;