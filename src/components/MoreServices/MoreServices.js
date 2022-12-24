import React, { useEffect, useState } from 'react';
import More from '../More/More';

const MoreServices = () => {
    const [moreServices, setMoreServices] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/more')
        .then(res => res.json())
        .then(data => setMoreServices(data))
    }, [])
    return (
        <div className='mt-5'>
            <h2 className='text-center text-primary mb-4'>More popular Tours</h2>
            <div className='services-container w-75'>
                {
                    moreServices.map(service => <More
                        key={service._id} 
                        service={service}
                        ></More>)
                }
            </div>
        </div>
    );
};

export default MoreServices;