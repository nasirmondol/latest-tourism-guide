import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='columns'>
                        <div className='footer-col'>
                            <h4 className='ms-4'>Company</h4>
                            <ul>
                                <li><a href="">about</a></li>
                                <li><a href="">Our services</a></li>
                                <li><a href="">Privacy policy</a></li>
                                <li><a href="">Affiliate service</a></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4 className='ms-4'>Get help</h4>
                            <ul>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Online orders</a></li>
                                <li><a href="">Shipping</a></li>
                                <li><a href=""> Payment status</a></li>
                            </ul>

                        </div>
                        <div className='footer-col'>
                            <h4 className='ms-4'>Online service</h4>
                            <ul>
                                <li><a href="">Watch more</a></li>
                                <li><a href="">Tourist guide</a></li>
                                <li><a href="">New service</a></li>
                                <li><a href="">Amazing places</a></li>
                            </ul>

                        </div>
                        <div className='footer-col'>
                            <h4 >Follow us</h4>
                            <div className='social-links'>
                                <a className='me-2' href=""><FaFacebook /></a>
                                <a className='me-2' href=""><FaInstagram /></a>
                                <a className='me-2' href=""><FaYoutube /></a>
                                <a className='me-2' href=""><FaTwitter /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5'>
                <p ><small className='text-white'>Copyright By Md. Nasir &copy; {new Date().getFullYear()}</small></p>
            </div>
        </div>
    );
};

export default Footer;