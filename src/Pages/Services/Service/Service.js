import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ data }) => {
    return (
        <div className='text-center shadow-xl shadow-slate-300 rounded'>
            <img src={data.image} alt="" />
            <div className='mt-3 px-5 pb-6 '>
                <h3 className='text-2xl font-bold text-indigo-900'>{data.name}</h3>
                <h5 className='text-amber-500 text-lg font-bold my-3'>${data.rate}</h5>
                <p className='text-slate-700'>{data.desc}</p>
                <Link to='/appointment' className='mt-4 py-2 px-6 bg-indigo-900 text-white rounded hover:bg-amber-500 inline-block'>Book an Appointment</Link>
            </div>
        </div>
    );
};

export default Service;