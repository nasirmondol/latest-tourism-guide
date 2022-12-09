import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, img, price, description } = service;
    const navigate = useNavigate();

    const handleDetails = id => {
        navigate(`/details/${id}`)
    }

    return (
        <div className='service'>
            <img className='image' width={300} height={300} src={img} alt="" />
            <h4 className='mt-2'>{name}</h4>
            <h6 >Price: ${price}</h6>
            <p><small className='mx-2'>{description}</small></p>
            <Button onClick={() => handleDetails(_id)} className=' w-100 mb-0'>Booking Now</Button>
        </div>
    );
};

export default Service;