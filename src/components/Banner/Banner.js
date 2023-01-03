import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='mt-0'>
            <Carousel>
                <Carousel.Item interval={500}>
                    <img
                        height={400}
                        className="d-block w-100 "
                        src="http://bonvoyagetravels.in/wp/wp-content/uploads/2019/09/travel.jpg"
                        alt=""
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={400}
                        className="d-block w-100 "
                        src="https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-blue-minimalist-flat-travel-banner-background-image_223018.jpg"
                        alt=""
                    />
                    
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;