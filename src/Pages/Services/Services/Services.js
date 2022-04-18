import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = (props) => {
    const [services] = useServices();
    return (
        <div className='min-h-[67vh] py-14 px-5 md:px-16 lg:px-32'>
            <h3 className='text-4xl md:text-5xl text-indigo-900 font-extrabold text-center'>Services I Provide</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 mt-8 md:mt-12'>
                {
                    props.children
                        ?
                        services.slice(0, 3).map(service => <Service data={service} key={service.id}></Service>)
                        :
                        services.map(service => <Service data={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;