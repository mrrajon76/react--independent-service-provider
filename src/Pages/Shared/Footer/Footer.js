import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, InboxIcon } from '@heroicons/react/solid';
import logo from '../../../images/logo-accountant.png';
import fb from '../../../images/facebook.png';
import ln from '../../../images/linkedin.png';
import tw from '../../../images/twitter.png';

const Footer = () => {
    return (
        <div className='bg-indigo-900 text-center md:text-left text-white pt-5 pb-3 px-5 lg:px-16 md:px-10'>
            <div className='grid md:grid-cols-3'>
                <div className='order-2 md:order-none md:mt-0 mt-5'>
                    <PhoneIcon className='w-5 inline-block'></PhoneIcon><span> +880 1762811511</span>
                    <br />
                    <InboxIcon className='w-5 inline-block'></InboxIcon><span> mrrajon76@gmail.com</span>
                </div>
                <div className='mx-auto order-1 md:order-none'>
                    <Link to='/'><img src={logo} alt="" className='w-28' /></Link>
                </div>
                <div className='flex items-center justify-center md:justify-end space-x-4 order-3 md:order-none md:mt-0 mt-5'>
                    <a href="https://facebook.com" rel="noreferrer" target="_blank"><img src={fb} alt="" className='w-8 h-8' /></a>
                    <a href="https://linkedin.com" rel="noreferrer" target="_blank"><img src={ln} alt="" className='w-8 h-8' /></a>
                    <a href="https://twitter.com" rel="noreferrer" target="_blank"><img src={tw} alt="" className='w-8 h-8' /></a>
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