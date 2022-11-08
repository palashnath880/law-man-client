import React from 'react';
import { Rating } from 'react-simple-star-rating';

const ServicesItem = () => {
    return (
        <div className='rounded-lg shadow-lg border border-gray-200 px-3 py-5'>
            <div>
                <img />
            </div>
            <div className='px-2'>
                <h2 className='text-xl'>Business Law</h2>
                <p className='text-slate-500'>lorem ipsum is a most popular placeholder text. 2 billions people use lorem ipsum. Lorem ipsum helpful tools for web developer.</p>
                <p className='mt-2 flex items-center'>
                    <Rating readonly={true} initialValue={4.5} SVGclassName='inline-block' iconsCount={5} allowFraction={true} size='20' className='m-0' />
                    <span className='mt-1 ml-2'>4.5 <small>( 400 )</small></span>
                </p>
                <button className='py-2 text-center w-full font-semibold duration-300 hover:bg-gray-700 hover:text-slate-50 mt-4 border border-gray-400 uppercase'>Get Service</button>
            </div>
        </div>
    );
}

export default ServicesItem;
