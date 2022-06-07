import React from 'react';
import aboutImg from '../../images/about-img.png';
import prof from '../../images/professional.png';
import resp from '../../images/helping.png';
import quality from '../../images/medal.png';

const About = () => {
    return (
        <div className='min-h-[67vh] py-16 px-5 md:px-14 lg:px-32'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                <div className='text-center md:text-left md:col-span-2 lg:pt-6 order-2 md:order-none'>
                    <h4 className='text-3xl font-light text-indigo-900 mb-3'>Hello, I'am</h4>
                    <h3 className='text-4xl lg:text-5xl text-indigo-900 font-extrabold'>Md. Rasheduzzaman Rajon</h3>
                    <h5 className='text-2xl font-bold text-slate-500 mt-3'>Accountant</h5>
                    <p className='mt-4'><b>‘RAJON-Your Accountant’</b> was born out of a passion to provide small to medium-sized business a financial solution that covers their needs from A to Z. I have over 8 years of experience in diverse tax applications & tax laws, in addition to financial business consulting for small to medium-sized business owners Nationwide.
                        <br /><br />
                        I started <b>‘RAJON-Your Accountant’</b> in 2019 when I was faced with the decision to either continue to work for other firms that stuck to traditional methods or to break free and bring accounting innovation to business owners who need something more by leveraging technology in order to provide remote accounting services to companies across the world while establishing a name for itself as being one of the most accurate and efficient new-aged accounting firms.
                    </p>
                </div>
                <div className='md:order-none order-1'>
                    <img src={aboutImg} alt="" className='w-3/4 md:w-full lg:w-1/2 block mx-auto' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 pt-14'>
                <div className="shadow-xl shadow-gray-300 px-5 py-6 rounded text-center border-b-4 border-slate-400 hover:border-indigo-900">
                    <img src={prof} alt="" className='block mx-auto w-20 lg:w-24' />
                    <h4 className='text-2xl font-bold text-indigo-900 mt-3'>Professionalism</h4>
                    <p className='mt-3'>It doesn’t matter if your firm is big or small if you are a single person operation or have multiple employees. I will always treat every client with the full extent of my expertise and strive to provide your firm with close personal and professional attention.</p>
                </div>
                <div className="shadow-xl shadow-gray-300 px-5 py-6 rounded text-center border-b-4 border-slate-400 hover:border-indigo-900">
                    <img src={resp} alt="" className='block mx-auto w-20 lg:w-24' />
                    <h4 className='text-2xl font-bold text-indigo-900 mt-3'>Responsiveness</h4>
                    <p className='mt-3'>I understand how daunting taxes and accounting can be. I strive to give you my dedication and talent and respond quickly and accurately to every query you have. My competent and experience knows how vital this information is to you and will always deliver results promptly.</p>
                </div>
                <div className="shadow-xl shadow-gray-300 px-5 py-6 rounded text-center border-b-4 border-slate-400 hover:border-indigo-900">
                    <img src={quality} alt="" className='block mx-auto w-16 lg:w-20' />
                    <h4 className='text-2xl font-bold text-indigo-900 mt-3'>Quality</h4>
                    <p className='mt-3'>Quality builds reputation. As a trusted advisor, my primary goal is to provide my clients with insightful advice to make informed financial decisions. I continually educate myself to improve our clients’ financial expertise and serve them with the most up-to-date information and knowledge.</p>
                </div>

            </div>
        </div>
    );
};

export default About;