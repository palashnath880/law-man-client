import React from 'react';
import { Rating } from 'react-simple-star-rating';
import { TrashIcon } from '@heroicons/react/24/outline'

const MyReviewsItem = ({ review, reviewDeleteHandler }) => {
    const { rating, ratingText, } = review;
    return (
        <div className='px-3 py-4 rounded-md shadow-lg border mb-3 flex'>
            <div className='w-32'>
                <img />
            </div>
            <div className='flex-1'>
                <h2 className='text-lg font-semibold'>Law Business</h2>
                <p className='text-slate-600'>Lorem ipsum </p>
                <p className='italic text-sm mt-2'>{ratingText}</p>
                <p className='flex items-center  gap-2'>
                    <Rating readonly={true} initialValue={rating} SVGclassName='inline-block' iconsCount={5} allowFraction={true} size='20' className='m-0' />
                    <span className='mt-1'>{rating}</span>
                </p>
            </div>
            <div className='px-3 flex items-center'>
                <button onClick={() => reviewDeleteHandler(review?._id)} className='w-10 h-10 bg-red-100 rounded-full flex justify-center items-center text-red-500'><TrashIcon className='w-5 h-5' /></button>
            </div>
        </div>
    );
}

export default MyReviewsItem;
