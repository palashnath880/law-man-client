import React from 'react';
import { Rating } from 'react-simple-star-rating';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import LightBox from 'react-awesome-lightbox';

const ServicesItem = ({ service, serviceDelete, serviceDeleteHandler }) => {

    const { _id, title, thumbnail_url, description, price } = service;
    const sliceDescription = description.slice(0, 100);
    const shortDescription = description.length > 100 ? sliceDescription : description;

    return (
        <div className='rounded-lg flex flex-col shadow-lg border border-gray-200 overflow-hidden'>
            <div className='overflow-hidden'>
                {/* <LightBox onClose image={thumbnail_url}></LightBox> */}
                {/* <img style={{ objectFit: 'cover' }} className='transition-all duration-400 cursor-pointer ease-in-out hover:scale-110 max-w-full max-h-full' src={thumbnail_url} alt='Service Card Thumbnail' /> */}

            </div>
            <div className='px-4 pt-5 flex-1'>
                <h2 className='text-xl'>{title}</h2>
                <p className='text-slate-500'>
                    {shortDescription}
                    {description.length > 100 && <Link to={`/services/${_id}`} className='ml-2 cursor-pointer text-blue-600 hover:underline'>....</Link>}
                </p>
                <div className='mt-2 flex justify-between items-center'>
                    <p className='flex items-center'>
                        <Rating readonly={true} initialValue={4.5} SVGclassName='inline-block' iconsCount={5} allowFraction={true} size='20' className='m-0' />
                        <span className='mt-1 ml-2'>4.5 <small>( 400 )</small></span>
                    </p>
                    <p>
                        <span className='text-xl font-semibold'>&#36;</span>{price}
                    </p>
                </div>
            </div>
            <div className='px-4 pb-5'>
                {
                    serviceDelete ?
                        <button onClick={() => serviceDeleteHandler(service?._id)} className='py-2 flex justify-center items-center gap-2 w-full font-semibold duration-300 hover:bg-gray-700 hover:text-slate-50 mt-4 border border-gray-400 uppercase'>
                            <TrashIcon className='w-4 h-4' />
                            Delete Service
                        </button>
                        :
                        <Link to={`/services/${_id}`} className='py-2 text-center block font-semibold duration-300 hover:bg-gray-700 hover:text-slate-50 mt-4 border border-gray-400 uppercase'>View Details</Link>
                }
            </div>
        </div>
    );
}

export default ServicesItem;
