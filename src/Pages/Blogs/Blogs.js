import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-[67vh] py-14 px-5 md:px-16 lg:px-32'>
            <h3 className='text-4xl md:text-5xl text-indigo-900 font-extrabold text-center'>Read Our Blogs</h3>
            <div className='mt-8 md:mt-12'>
                <div className='text-center md:text-left border-2 border-slate-300 rounded p-3 md:p-6'>
                    <div className='px-5'>
                        <h3 className='text-2xl font-bold text-indigo-900'>Difference between authorization and authentication</h3>
                        <p className='text-slate-700 mt-4'>Authorization and Authentication both are used in terms of security. In the authentication process, the identity of users is checked to get access to a system. While in the authorization process, a person’s or user’s authorities are checked for accessing the resources. For the authentication process, need the user's login details to verify but for the authorization process first, need authentication then need to check the user's privileges
                            <br /><br />So, to access a resource need both authentication and authorization. If the user can't prove their identity, you won't be allowed into a resource which is called authentication. And even if the user can prove their identity, if they are not authorized for that resource, they can't access the resource. </p>
                    </div>
                </div>
                <div className='text-center md:text-left border-2 border-slate-300 rounded p-3 md:p-6 mt-5'>
                    <div className='px-5'>
                        <h3 className='text-2xl font-bold text-indigo-900'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                        <p className='text-slate-700 mt-4'>Google Firebase offers many features that reduce development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized. I am using this to set up the authentication process of my React application and also to host my application.
                            <br /><br />
                            In my application, I have used email and password authentication, Google sign-in authentication and GitHub sign-in authentication. Except these two authentication systems, Firebase also provides authentication using Apple ID, Twitter, Facebook, Yahoo, Microsoft, Game center, Play games, Phone, and only email.</p>
                    </div>
                </div>
                <div className='text-center md:text-left border-2 border-slate-300 rounded p-3 md:p-6 mt-5'>
                    <div className='px-5'>
                        <h3 className='text-2xl font-bold text-indigo-900'>What other services does firebase provide other than authentication?</h3>
                        <p className='text-slate-700 mt-4'>Firebase is a Backend-as-a-Service. It provides developers with a variety of tools and services to help them develop quality apps. Except authentication system, it provides...<br /><br />Cloud filestore: Facilities to build serverless and secure apps at a global scale.<br /><br />Realtime Database: Build serverless apps by storing and syncing JSON data between users in near-real-time, on or offline, with strong user-based security.
                            <br /><br />Cloud messaging: To reliably send and receive push messages between servers and devices across platforms at no cost. <br /><br />Hosting: Deploy fast-loading & secure websites that are backed by a global CDN without all of the hassles.<br /><br />and many more....</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;