import React from 'react';

const WhyMeCard = ({ data }) => {
    return (
        <div className='px-5 py-6 shadow-xl shadow-gray-300 hover:shadow-gray-400 rounded text-center'>
            <img src={data.image} alt="" className='block mx-auto w-16 md:w-20' />
            <h4 className='mt-3 text-slate-800 text-1xl md:text-2xl font-medium'>{data.name}</h4>
        </div>
    );
};

export default WhyMeCard;