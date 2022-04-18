import React from 'react';
import useSpeciality from '../../../hooks/useSpeciality';
import WhyMeCard from '../WhyMeCard/WhyMeCard';

const WhyMe = () => {
    const [data] = useSpeciality();
    return (
        <div className='pb-14 md:pb-20 px-5 md:px-16 lg:px-32'>
            <h3 className='text-4xl md:text-5xl text-indigo-900 font-extrabold text-center'>Why Me?</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mt-6 md:mt-8'>
                {
                    data.map(singleData => <WhyMeCard data={singleData} key={singleData.id}></WhyMeCard>)
                }
            </div>
        </div>

    );
};

export default WhyMe;