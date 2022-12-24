import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='bg-success m-4'>
            <div className='w-75 mx-auto'>
                <br />
                <br />
                <br />
                <div>
                    <div className='d-flex align-items-center mx-auto w-25'>
                        <div style={{ height: '1px' }} className='bg-primary w-25 mx-auto'></div>
                        <div>
                            <h4 className='text-center'>ABOUT US</h4>
                        </div>
                        <div style={{ height: '1px' }} className='bg-primary w-25 mx-auto'></div>
                    </div>

                </div>
            </div>

            <div className='about-container d-flex d-block mx-auto w-75'>
                <div className='about-section1'>
                    <img className='m-5' width={450} src="https://expertvagabond.com/wp-content/uploads/inspiring-travel-quotes-guide.jpg" alt="" />
                </div>
                <div className='address'>
                    <h3 className='text-dark'>Connect with us</h3>
                    <h6 className='text-dark d-flex align-items-center'><span class="material-symbols-outlined ml-2">
                        mail
                    </span> Email: nasirahmed8202@gmail.com</h6>
                    <h6 className='text-dark d-flex align-items-center'><span class="material-symbols-outlined">
                        edit_location
                    </span> Address: Baridhara, Bashundhara, Dhaka</h6>
                    <h6 className='text-dark d-flex align-items-center'><span class="material-symbols-outlined">
                        wifi_calling
                    </span> Contact: 0138383892, 0145729393</h6>
                </div>
            </div>
        </div>
    );
};

export default About;