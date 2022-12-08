import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import useService from '../../hooks/useService/useService';
import './Services.css'

const Services = () => {
   const [services, setServices] = useService([]);
    return (
        <div>
            <h2 className='text-success mt-3'> OUR SERVICES</h2>
            <div className='services-container w-75'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;