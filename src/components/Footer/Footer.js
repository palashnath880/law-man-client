import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLongRightIcon, EnvelopeIcon, HomeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { UserContext } from '../../contexts/UserContextProvider/UserContextProvider';
import footerLogo from '../../images/footer-logo.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    const { user } = useContext(UserContext);

    return (
        <footer className='bg-gray-700'>
            <div className='container mx-auto py-10 px-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='flex flex-col items-center md:items-start pb-10 md:p-0'>
                        <img className='w-28' src={footerLogo} alt='Footer Logo' />
                        <p className='mt-3 text-center md:text-left lg:pr-[70px] text-slate-300 hover:text-slate-200 duration-300'>If you or your business is facing a legal challenge that calls for sound advice and skilled representation, contact us today to arrange a free consultation with an attorney.</p>
                    </div>
                    <div className='pb-5 md:p-0'>
                        <h1 className='text-slate-50 text-2xl inline-block border-b border-slate-400 pb-3'>Quick Links</h1>
                        <ul className='pt-5'>
                            <li><Link className='flex items-center gap-2 text-slate-300 hover:text-slate-200 duration-300 py-1 mb-1' to='/'> <ArrowLongRightIcon className='w-5 h-5' /> Home</Link></li>
                            <li><Link className='flex items-center gap-2 text-slate-300 hover:text-slate-200 duration-300 py-1 mb-1' to='/services'> <ArrowLongRightIcon className='w-5 h-5' />Services</Link></li>
                            <li><Link className='flex items-center gap-2 text-slate-300 hover:text-slate-200 duration-300 py-1 mb-1' to='/blogs'> <ArrowLongRightIcon className='w-5 h-5' /> Blogs</Link></li>
                            {user === null &&
                                <li><Link className='flex items-center gap-2 text-slate-300 hover:text-slate-200 duration-300 py-1 mb-1' to='/login'> <ArrowLongRightIcon className='w-5 h-5' /> Login</Link></li>
                            }
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-slate-50 text-2xl inline block border-b border-slate-400 pb-3'>Contact Us</h1>
                        <div className='pt-5'>
                            <p className='mt-3 flex items-center gap-2 duration-300 text-slate-300 cursor-pointer hover:text-slate-200'>
                                <HomeIcon className='w-5 h-5 ' />
                                <span>915 Sacramento Street, <br /> Bakersfield CA 93305</span>
                            </p>
                            <p className='mt-3 flex items-center gap-2 duration-300 text-slate-300 cursor-pointer hover:text-slate-200'>
                                <PhoneIcon className='w-5 h-5 text-slate-50' />
                                <a href='tel:+880123456789' rel='noreferrer'>+880123456789</a>
                            </p>
                            <p className='mt-3 flex items-center gap-2 duration-300 text-slate-300 cursor-pointer hover:text-slate-200'>
                                <EnvelopeIcon className='w-5 h-5 text-slate-50' />
                                <a href='maito:example@gmail.com' rel='noreferrer'>example@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-10 border-t border-slate-500'>
                <p className='text-center text-slate-50'>Copyright 2020 - {year} | All Rights Reserved </p>
                <p className='text-center text-slate-400 pt-3'>Develop By
                    <a target='_blank' rel="noreferrer" href='https://github.com/palashnath880' className='hover:underline ml-1 hover:text-slate-50 duration-300'>Palash</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
