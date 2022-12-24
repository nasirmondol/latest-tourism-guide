import React, { useEffect, useState } from 'react';
import More from '../More/More';

const MoreServices = () => {
    const [moreServices, setMoreServices] = useState([])
    useEffect(() =>{
        fetch('services')
        .then(res => res.json())
        .then(data => setMoreServices(data))
    }, [])
    return (
        <div className='mt-5'>
            <h2 className='text-center text-primary mb-4'>More popular Tours</h2>
            <div className='services-container w-75'>
                {
                    moreServices.map(service => <More
                        key={service.id} 
                        service={service}
                        ></More>)
                }
            </div>
        </div>
    );
};

export default MoreServices;