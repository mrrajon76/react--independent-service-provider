import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import logo from '../../../images/logo-accountant.png';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='lg:sticky lg:top-0 bg-indigo-900 py-3 lg:px-16 md:px-10 px-5 lg:flex justify-between items-center shadow-lg'>
            <div>
                <Link to='/'><img src={logo} alt="" className='w-28' /></Link>
            </div>

            <div onClick={() => setOpen(!open)} className='text-white absolute right-5 top-6 cursor-pointer lg:hidden'>
                {
                    open ? <XIcon className='w-9'></XIcon> : <MenuIcon className='w-9'></MenuIcon>
                }

            </div >

            <div className={`text-white lg:flex items-center lg:space-x-12 lg:space-y-0 space-y-7 absolute lg:static bg-indigo-900 lg:z-auto z-20 left-0 w-full lg:w-auto lg:px-0 lg:py-0 px-9 py-7 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                <ul className='lg:flex items-center lg:space-x-12 lg:space-y-0 space-y-5'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/about'>About Me</Link></li>
                    <li><Link to='/contact'>Contact Me</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
                <Link to='/checkout' className='py-2 px-6 bg-white text-indigo-900 rounded hover:bg-amber-500 hover:text-white inline-block'>Book an Appointment</Link>
            </div>
        </div >
    );
};

export default Header;