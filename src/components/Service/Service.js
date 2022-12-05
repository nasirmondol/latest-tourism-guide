import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, price } = service;

    return (
        <div className='service'>
            <img width={300} height={300} src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <Button className='mb-4'>Buy Now</Button>
        </div>
    );
};

export default Service;