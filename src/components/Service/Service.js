import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, price } = service;
    const navigate = useNavigate();

    const handleDetails = id => {
        navigate(`/details/${id}`)
    }

    return (
        <div className='service'>
            <img width={300} height={300} src={img} alt="" />
            <h4 className='mt-2'>{name}</h4>
            <h6 >Price: ${price}</h6>
            <Button onClick={() => handleDetails(id)} className='mb-4'>Buy Now</Button>
        </div>
    );
};

export default Service;