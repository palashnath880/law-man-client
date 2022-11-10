import { EyeIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const BestServicesItem = ({ service }) => {
    const { _id, title, description, thumbnail_url, price, avg, count } = service;
    const sliceDescription = description.slice(0, 100);
    const shortDescription = description.length > 100 ? sliceDescription.concat('....') : description;
    return (
        <div className='rounded-lg border border-gray-200'>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-3/12 md:pl-3 flex items-center overflow-hidden'>
                    <img className='rounded-lg' src={thumbnail_url} alt='Service Thumbnail' />
                </div>
                <div className='flex-1 p-3'>
                    <h1>{title}</h1>
                    <p className=''>{shortDescription}</p>
                    <div className='flex items-center gap-4'>
                        <p className='mt-1 font-semibold'>Price: <span className='font-normal'>{price}</span></p>
                        <p className='flex items-center'>
                            <span className='mr-1 mt-1 font-semibold'>Rating:</span>
                            <Rating readonly={true} initialValue={avg} SVGclassName='inline-block' iconsCount={5} allowFraction={true} size='20' className='m-0' />
                            <span className='mt-1 ml-1'>{avg}<small className='ml-1'>({count})</small></span>
                        </p>
                    </div>
                    <button>
                        <Link to={`/services/${_id}`} className='flex items-center border px-5 py-2 mt-3 bg-gray-700 text-slate-50'>
                            <EyeIcon className='w-5 h-5 mr-1' />
                            View Details
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BestServicesItem;
