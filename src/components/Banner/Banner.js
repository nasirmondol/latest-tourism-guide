import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='mt-5'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        height={400}
                        className="d-block w-100 mt-3"
                        src="https://travelfuntoosh.com/Content/Images/banner.jpg"
                        alt=""
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        height={400}
                        className="d-block w-100 mt-3"
                        src="http://bonvoyagetravels.in/wp/wp-content/uploads/2019/09/travel.jpg"
                        alt=""
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={400}
                        className="d-block w-100 mt-3"
                        src="https://cdn.kstdc.co/uploads/2019/09/bus-tour.jpg"
                        alt=""
                    />
                    
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;