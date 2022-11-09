import React, { useContext, useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContextProvider/UserContextProvider';
import { toast } from 'react-toastify';

const MyReviewsItem = ({ review, reviewDeleteHandler }) => {

    const { serverRootURL } = useContext(UserContext);

    const { _id, rating, ratingText, serviceID } = review;
    const [service, setService] = useState(null);

    const [reviewEdit, setReviewEdit] = useState(null);
    const [editRating, setEditRating] = useState(review?.rating);

    // edit review
    const editReviewHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const rating_text = form.ratingText.value;

        if (!rating_text) {
            toast.warning('Please Enter Rating Text');
            return;
        }
        if (editRating === 0) {
            toast.warning('Please enter at least one star.');
            return;
        }
        const url = `${serverRootURL}my-reviews/edit/${_id}`;
        fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ratingText: rating_text, rating: editRating }),
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status === 'good') {
                    toast.success(data?.message);
                    review.rating = editRating;
                    review.ratingText = rating_text;
                    setReviewEdit(null);
                } else {
                    toast.error(data?.message);
                }
            })
            .catch(err => console.error(err));
    }

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
        <>
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
                    <button onClick={() => setReviewEdit(review)} title='Edit Review' className='w-10 h-10 bg-green-100 rounded-full flex justify-center items-center text-green-500'><PencilIcon className='w-5 h-5' /></button>
                    <button onClick={() => reviewDeleteHandler(review?._id)} title='Delete Review' className='w-10 h-10 bg-red-100 rounded-full flex justify-center items-center text-red-500'><TrashIcon className='w-5 h-5' /></button>
                </div>
            </div>
            {/* Review Edit Modal */}
            {
                reviewEdit !== null &&
                <div className='h-screen w-full fixed top-0 right-0' style={{ background: 'linear-gradient(#00000075, #00000075)' }}>
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='px-3 py-5 rounded-md border border-gray-300 bg-gray-50 w-full md:w-[350px]'>
                            <form onSubmit={editReviewHandler}>
                                <h3 className='text-center text-2xl border-b border-gray-200 pb-2'>Edit Reviews</h3>
                                <div className='my-3'>
                                    <input type='text' className='px-4 py-2 w-full border focus:outline-violet-500 border-gray-200' defaultValue={reviewEdit?.ratingText} name='ratingText' placeholder='Rating Text' />
                                    <p><Rating onClick={(e) => setEditRating(e)} initialValue={editRating} SVGclassName='inline-block' iconsCount={5} allowFraction={true} size='20' className='m-0' /></p>
                                </div>
                                <div>
                                    <button type='submit' className='px-5 py-2 bg-green-500 text-slate-50 mr-3'>Update</button>
                                    <button onClick={() => setReviewEdit(null)} type='button' className='px-5 py-2 bg-red-500 text-slate-50 mr-3'>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }

        </>
    );
}

export default MyReviewsItem;
