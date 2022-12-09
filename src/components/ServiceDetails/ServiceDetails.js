import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [services, setServices] = useServiceDetails(serviceId);

    return (
        <div className='App w-25 d-block mx-auto'>
            <img width={300} height={300} src={services.img} alt="" />
            <h2>{services.name}</h2>
            <p >{services.description}</p>
            <h6>Price: ${services.price}</h6>
            <Link to={`/checkout/${serviceId}`}>
                <Button>Check Out</Button>
            </Link>
        </div>
    );
};

export default ServiceDetails;