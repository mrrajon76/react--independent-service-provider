import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, InboxIcon } from '@heroicons/react/solid';
import logo from '../../../images/logo-accountant.png';
import fb from '../../../images/facebook.png';
import ln from '../../../images/linkedin.png';
import tw from '../../../images/twitter.png';

const Footer = () => {
    return (
        <div className='bg-indigo-900 text-white pt-5 pb-5 px-5 md:px-16'>
            <div className='grid md:grid-cols-3 lg:grid-cols-4'>
                <div className='col-auto md:col-span-3 lg:col-auto'>
                    <Link to='/'><img src={logo} alt="" className='w-28 block mx-auto lg:mx-0' /></Link>
                    <p className='mt-5 text-center lg:text-left lg:mx-0 md:mx-14'>Helping Businesses Achieve Healthy and Steady Growth through Exceptional Accounting Services</p>
                </div>

                <div className='flex justify-center md:justify-start lg:justify-center lg:mt-0 md:mt-8 mt-6 text-center md:text-left'>
                    <div>
                        <h4 className='text-xl font-bold mb-2 text-amber-400'>Quick Links</h4>
                        <ul className='space-y-1'>
                            <li className='hover:text-amber-400'><Link to='/'>Home</Link></li>
                            <li className='hover:text-amber-400'><Link to='/services'>Services</Link></li>
                            <li className='hover:text-amber-400'><Link to='/about'>About Me</Link></li>
                            <li className='hover:text-amber-400'><Link to='/contact'>Contact Me</Link></li>
                            <li className='hover:text-amber-400'><Link to='/blogs'>Blogs</Link></li>
                            <li className='hover:text-amber-400'><Link to='/login'>Login</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-center lg:mt-0 md:mt-8 mt-6 text-center md:text-left'>
                    <div>
                        <h4 className='text-xl font-bold mb-2 text-amber-400'>Appointment Slots</h4>
                        <ul className='space-y-1'>
                            <li>Saturday: 9Am to 12PM</li>
                            <li>Sunday - Thursday: 9Am to 5PM</li>
                            <li>Friday: CLOSE</li>
                        </ul>
                        <Link to='/appointment' className='mt-3 py-2 px-6 bg-white text-indigo-900 rounded hover:bg-amber-500 hover:text-white inline-block'>Book Now</Link>
                    </div>
                </div>

                <div className='flex justify-center md:justify-end lg:mt-0 md:mt-8 mt-6 text-center md:text-left'>
                    <div>
                        <h4 className='text-xl font-bold mb-2 text-amber-400'>Get in Touch</h4>
                        <ul className='space-y-1'>
                            <li><PhoneIcon className='w-5 inline-block'></PhoneIcon><span> +880 1762811511</span></li>
                            <li><InboxIcon className='w-5 inline-block'></InboxIcon><span> mrrajon76@gmail.com</span></li>
                        </ul>

                        <div className='flex items-center justify-center md:justify-start space-x-3 mt-5'>
                            <a href="https://facebook.com" rel="noreferrer" target="_blank"><img src={fb} alt="" className='w-8 h-8' /></a>
                            <a href="https://linkedin.com" rel="noreferrer" target="_blank"><img src={ln} alt="" className='w-8 h-8' /></a>
                            <a href="https://twitter.com" rel="noreferrer" target="_blank"><img src={tw} alt="" className='w-8 h-8' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 mb-4 border-t'></div>
            <div className='text-center'>
                <p>copyright &copy; {new Date().getFullYear()}. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;