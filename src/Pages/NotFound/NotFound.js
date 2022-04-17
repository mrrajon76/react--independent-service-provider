import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404-error.gif';

const NotFound = () => {
    return (
        <div className='flex justify-center bg-slate-100'>
            <Link to='/'><img src={notFound} alt="" className='' /></Link>
        </div>
    );
};

export default NotFound;