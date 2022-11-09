import React, { useContext, useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContextProvider/UserContextProvider';

const MyReviewsItem = ({ review, reviewDeleteHandler }) => {

    const { serverRootURL } = useContext(UserContext);

    const { _id, rating, ratingText, serviceID } = review;
    const [service, setService] = useState(null);

    useEffect(() => {
        const url = `${serverRootURL}services/${serviceID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
            .catch(err => console.error(err));
    }, [serviceID]);

    const sliceDescription = service !== null && service?.description.slice(0, 70);
    const shortDescription = service !== null && service?.description.length > 70 ? sliceDescription.concat(' ....') : service?.description;

    return (
        <div className='px-3 py-4 rounded-md shadow-lg border mb-3 flex'>
            <div className='w-32'>
                <img src={service?.thumbnail_url} alt='Service Thumbnail' />
            </div>
            <div className='flex-1 pl-2'>
                <Link to={`/services/${serviceID}`}>
                    <h2 className='text-lg font-semibold'>{service !== null && service?.title}</h2>
                </Link>
                <p className='text-slate-600'>{shortDescription}</p>
                <p className='italic text-sm mt-2'>{ratingText}</p>
                <p className='flex items-center  gap-2'>
                    <Rating readonly={true} initialValue={rating} SVGclassName='inline-block' iconsCount={5} allowFraction={true} size='20' className='m-0' />
                    <span className='mt-1'>{rating}</span>
                </p>
            </div>
            <div className='px-3 flex items-center gap-2'>
                <Link to={`/my-reviews/edit/${_id}`} title='Edit Review' className='w-10 h-10 bg-green-100 rounded-full flex justify-center items-center text-green-500'><PencilIcon className='w-5 h-5' /></Link>
                <button onClick={() => reviewDeleteHandler(review?._id)} title='Delete Review' className='w-10 h-10 bg-red-100 rounded-full flex justify-center items-center text-red-500'><TrashIcon className='w-5 h-5' /></button>
            </div>
        </div>
    );
}

export default MyReviewsItem;
