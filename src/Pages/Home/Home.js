import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services/Services/Services';
import './Home.css';
import WhyMe from './WhyMe/WhyMe';

const Home = () => {
    return (
        <div className='min-h-[67vh]'>
            <div className='main-banner min-h-[75vh] md:min-h-[66vh] lg:min-h-[87vh] flex items-center justify-center'>
                <div className='text-center text-white'>
                    <h1 className='text-5xl md:text-7xl lg:text-8xl font-extrabold'>Easy. Fast. Secure.</h1>
                    <h4 className='text-1xl md:text-2xl px-5 md:px-20 lg:px-44 mt-7'>Trusting someone with your business financial means something to you as a business owner.
                        It’s a role that takes you away from reaching your fullest potential as an entrepreneur. Your business is special to you and I make
                        it special to us. Get your Bookkeeping & Tax services done with the experts!</h4>
                    <Link to='/appointment' className='mt-7 py-2 px-6 bg-amber-500 text-white rounded hover:bg-white hover:text-indigo-900 inline-block'>Book an Appointment</Link>
                </div>
            </div>

            <div>
                <Services>3</Services>
            </div>

            <div>
                <WhyMe></WhyMe>
            </div>
        </div>
    );
};

export default Home;