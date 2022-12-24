import React from 'react';
import { FaStar } from 'react-icons/fa'

const More = ({ service }) => {
    const { img, name, price } = service;
    return (
        <div className='d-block mx-auto'>
            <img className='d-block mx-auto' width={300} height={300} src={img} alt="" />
            <div >
                <a className='me-2 text-warning' href=""><FaStar /></a>
                <a className='me-2 text-warning ' href=""><FaStar /></a>
                <a className='me-2 text-warning' href=""><FaStar /></a>
                <a className='me-2 text-warning' href=""><FaStar /></a>
                <a className='me-2 text-warning' href=""><FaStar /></a>
            </div>
            <h6 className='mb-0 text-success mt-2'>Price: ${price}</h6>
            <h4 className='text-success mb-5'>{name}</h4>

        </div>
    );
};

export default More;