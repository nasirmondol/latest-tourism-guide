import React from 'react';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import MoreServices from '../../MoreServices/MoreServices';
import Services from '../../Services/Services';

const Home = () => {

    return (
        <>
            <div className='App'>
                <Banner />
                <Services />
                <About />
                <MoreServices />
            </div>

        </>
    );
};

export default Home;