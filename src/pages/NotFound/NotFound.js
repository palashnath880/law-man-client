import React from 'react';
import { Link } from 'react-router-dom';
import notFundImg from '../../images/notfound.gif';

const NotFound = () => {
    return (
        <div className="min-h-screen w-full mt-10">
            <div className="container mx-auto px-5 flex justify-center items-center h-full">
                <div>
                    <h1 className="text-center text-8xl">404</h1>
                    <img src={notFundImg} alt='404 Page' />
                    <div className="text-center mt-3">
                        <h3 className="text-3xl">
                            Look like you're lost
                        </h3>
                        <p className='my-3'>The page you are looking for not avaible!</p>
                        <Link to='/' className='py-2 px-8 inline-block bg-green-500 text-slate-50'>Go to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
