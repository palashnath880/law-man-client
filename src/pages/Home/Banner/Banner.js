import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../../../images/banner-bg.jpg';

const Banner = () => {
    return (
        <div className='h-screen w-full' style={{ backgroundImage: `linear-gradient(#00000050, #00000050),url(${bgImg})` }}>
            <div className='h-full w-full flex justify-center items-center'>
                <div className='text-center'>
                    <h1 className='text-6xl text-slate-50'>You Will Get Extensive Legal Support</h1>
                    <p className='text-2xl mt-3 mb-5 text-slate-200'>We have years of experience in providing legal help in various spheres of law.</p>
                    <Link to='/services' className='uppercase border bg-slate-50 hover:bg-transparent text-gray-700 hover:text-slate-50 font-semibold inline-block duration-300 hover:tracking-wide px-8 py-2'>Get Started</Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;
