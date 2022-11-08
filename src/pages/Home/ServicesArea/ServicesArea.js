import React from 'react';
import ServicesItem from '../../../shared/ServicesItem/ServicesItem';

const ServicesArea = () => {
    return (
        <div className=''>
            <div className='container mx-auto px-5 py-10'>
                <div className=''>
                    <h1 className='text-3xl pb-5 text-center'>Services</h1>
                    <div className='grid grid-cols-3 gap-2'>
                        <ServicesItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesArea;
