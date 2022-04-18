import React from 'react';

const Checkout = () => {
    return (
        <div className='min-h-[67vh] py-16 px-5 md:px-14 lg:px-32'>
            <div className=''>
                <h3 className='text-4xl lg:text-5xl text-indigo-900 font-extrabold text-center mb-6'>Book Your Appointment</h3>

                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_name" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer" placeholder=" " required />
                            <label for="floating_name" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="email" name="floating_email" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer" placeholder=" " required />
                            <label for="floating_email" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_phone" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer" placeholder=" " required />
                            <label for="floating_phone" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_service" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer" placeholder=" " required />
                            <label for="floating_service" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service You Need?</label>
                        </div>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <textarea rows={4} name="floating_message" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer" placeholder=" " required />
                        <label for="floating_message" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                    </div>
                    <button type="submit" className="text-white bg-indigo-900 hover:bg-amber-500 focus:outline-none uppercase rounded px-16 py-2 text-center">Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;