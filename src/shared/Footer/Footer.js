import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='bg-gray-700 pt-10'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-4 gap-2'>
                    <div></div>
                    <div>
                        <h1 className='text-slate-50 text-xl'>Quick Links</h1>
                        <ul className='mt-3'>
                            <li><Link className='flex items-center gap-2 text-slate-300 hover:text-slate-200 duration-300 py-1 mb-1'> <ArrowLongRightIcon className='w-5 h-5' /> Home</Link></li>
                            <li><Link className='flex items-center gap-2 text-slate-300 hover:text-slate-200 duration-300 py-1 mb-1'> <ArrowLongRightIcon className='w-5 h-5' /> Home</Link></li>
                            <li><Link className='flex items-center gap-2 text-slate-300 hover:text-slate-200 duration-300 py-1 mb-1'> <ArrowLongRightIcon className='w-5 h-5' /> Home</Link></li>
                            <li><Link className='flex items-center gap-2 text-slate-300 hover:text-slate-200 duration-300 py-1 mb-1'> <ArrowLongRightIcon className='w-5 h-5' /> Home</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-slate-50 text-xl'>Contact</h1>
                        <address className='mt-3'>
                            <p>
                                202 Los Angles, <br />
                                Californis
                            </p>
                            <p><a href='tel:+880123456789'>+880123456789</a></p>
                            <p><a href='mailto:example@gmail.com'>example@gmail.com</a></p>
                        </address>

                    </div>

                </div>
            </div>
            <div className='py-10 border-t border-slate-500'>
                <p className='text-center text-slate-50'>Copyright 2020 - {year} | All Rights Reserved </p>
                <p className='text-center text-slate-400 pt-3'>Develop By
                    <a target='_blank' href='https://github.com/palashnath880' className='hover:underline ml-1 hover:text-slate-50 duration-300'>Palash</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
