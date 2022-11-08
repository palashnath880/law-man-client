import React from 'react';
import { Link } from 'react-router-dom';
import ServicesItem from '../../shared/ServicesItem/ServicesItem';

const MyServices = () => {
    return (
        <div className='container mx-auto py-10'>
            <div>
                <h1 className='text-3xl text-center border-b border-gray-200 pb-5'>My All Services</h1>
                <div className='mt-8'>
                    <Link to='/add-services' className='px-6 py-3 rounded bg-gray-700 text-slate-50'>Add New Service</Link>
                </div>
                <div className='grid grid-cols-3 gap-2 mt-8'>
                    <ServicesItem />
                </div>
            </div>
        </div>
    );
}

export default MyServices;
