import React from 'react';
import googleIcon from '../../../images/google.png';
import githubIcon from '../../../images/github.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='min-h-[67vh] lg:w-1/3 mx-auto my-14 p-7 shadow-lg shadow-slate-400'>
            <h3 className='text-4xl text-indigo-900 font-extrabold text-center mb-6'>Welcome Back!</h3>
            <form>
                <div className="relative z-0 mb-7 w-full group">
                    <input type="email" name="floating_email" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer" placeholder=" " required />
                    <label for="floating_email" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 mb-10 w-full group">
                    <input type="text" name="floating_name" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer" placeholder=" " required />
                    <label for="floating_name" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>

                <button type="submit" className="text-white bg-indigo-900 hover:bg-amber-500 rounded w-full py-2.5 text-center">Login</button>
                <span className='mt-4 text-center block'>Don't have account? <Link to="/register" className='text-amber-500 font-semibold'>Register</Link></span>
            </form>
            <div className='flex justify-center items-center my-8'>
                <div className='border-t-2 border-slate-300 w-full'></div>
                <div className='mx-3'>OR</div>
                <div className='border-t-2 border-slate-300 w-full'></div>
            </div>
            <div>
                <div className='border border-indigo-900 py-2.5 w-full hover:bg-indigo-900 hover:text-white flex justify-center items-center cursor-pointer rounded'>
                    <img src={googleIcon} alt="" className='w-5 h-5 mr-4' />
                    Login with Google
                </div>
                <div className='mt-4 border border-indigo-900 py-2.5 w-full hover:bg-indigo-900 hover:text-white flex justify-center items-center cursor-pointer rounded'>
                    <img src={githubIcon} alt="" className='w-5 h-5 mr-4' />
                    Login with GitHub
                </div>
            </div>
        </div>
    );
};

export default Login;