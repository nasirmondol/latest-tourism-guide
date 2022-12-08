import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [services, setServices] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className='App w-25 d-block mx-auto'>
            <img width={300} height={300} src={services.img} alt="" />
            <h2>{services.name}</h2>
            <p >{services.description}</p>
            <h6>Price: ${services.price}</h6>
            
        </div>
    );
};

export default ServiceDetails;