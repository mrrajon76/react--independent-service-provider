import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-[67vh] py-14 px-5 md:px-16 lg:px-32'>
            <h3 className='text-4xl md:text-5xl text-indigo-900 font-extrabold text-center'>Read Our Blogs</h3>
            <div className='mt-8 md:mt-12'>
                <div className='text-center md:text-left border-2 border-slate-300 rounded p-3 md:p-6'>
                    <div className='px-5'>
                        <h3 className='text-2xl font-bold text-indigo-900'>Difference between authorization and authentication</h3>
                        <p className='text-slate-700 mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus similique aspernatur doloremque quidem dolorem, aliquam eum facilis molestiae quas amet nobis quae repudiandae, doloribus quaerat adipisci blanditiis. Beatae, suscipit consequatur.</p>
                    </div>
                </div>
                <div className='text-center md:text-left border-2 border-slate-300 rounded p-3 md:p-6 mt-5'>
                    <div className='px-5'>
                        <h3 className='text-2xl font-bold text-indigo-900'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                        <p className='text-slate-700 mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus similique aspernatur doloremque quidem dolorem, aliquam eum facilis molestiae quas amet nobis quae repudiandae, doloribus quaerat adipisci blanditiis. Beatae, suscipit consequatur.</p>
                    </div>
                </div>
                <div className='text-center md:text-left border-2 border-slate-300 rounded p-3 md:p-6 mt-5'>
                    <div className='px-5'>
                        <h3 className='text-2xl font-bold text-indigo-900'>What other services does firebase provide other than authentication?</h3>
                        <p className='text-slate-700 mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus similique aspernatur doloremque quidem dolorem, aliquam eum facilis molestiae quas amet nobis quae repudiandae, doloribus quaerat adipisci blanditiis. Beatae, suscipit consequatur.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;