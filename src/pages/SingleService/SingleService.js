import { TrashIcon } from '@heroicons/react/24/outline';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { toast } from 'react-toastify';
import { UserContext } from '../../contexts/UserContextProvider/UserContextProvider';

const SingleService = () => {
    const service = useLoaderData();
    const { _id, title, description, thumbnail_url, price } = service;
    const { user, serverRootURL, cookies } = useContext(UserContext);
    const [reviews, setReviews] = useState(null);

    const [rating, setRating] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    const JWTToken = cookies['lawmanjwt'];

    // reviews fetcher
    const reviewFetcher = () => {
        fetch(`${serverRootURL}reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
            .catch(err => console.error(err));
    }

    // review add handler 
    const reviewAddHandler = (event) => {

        event.preventDefault();
        const form = event.target;
        const ratingText = form.rating_text.value;

        if (rating === '0') {
            toast.warning('Please select at least one star.');
            return;
        }
        const url = `${serverRootURL}reviews`;

        const insertData = {
            rating,
            ratingText,
            serviceID: _id,
            authorID: user?.uid,
            authorName: user?.displayName,
            authorPhotoUrl: user?.photoURL
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'lawman-jwt': JWTToken
            },
            body: JSON.stringify(insertData),
        }

        fetch(url, requestOptions)
            .then(res => res.json())
            .then(data => {
                if (data?.status === 'good') {
                    toast.success(data?.message);
                    form.reset();
                    setRating(0);
                    reviewFetcher();
                } else {
                    toast.error(data?.message);
                }
            })
            .catch(err => console.error(err));

    }

    // delete review 
    const reviewDeleteHandler = (reviewID) => {
        const url = `${serverRootURL}reviews/${reviewID}`;
        fetch(url, { method: 'DELETE', headers: { 'lawman-jwt': JWTToken } })
            .then(res => res.json())
            .then(data => {
                if (data?.status === 'good') {
                    toast.success(data?.message);
                    const remainingReview = reviews.filter(rev => rev._id !== reviewID);
                    setReviews(remainingReview);
                } else {
                    toast.error(data?.message);
                }
            })
            .catch(err => console.error(err));
    }

    const navigateToLogin = () => {
        navigate('/login', { state: { from: location } });
    }

    useEffect(() => {
        reviewFetcher();
    }, []);

    return (
        <div className='container mx-auto px-5 py-10'>
            {/* React helmet */}
            <Helmet><title>{title}</title></Helmet>
            <div className='flex gap-2'>
                <div className='w-full xl:w-10/12 lg:w-9/12 mx-auto'>
                    <div className='rounded-md bg-slate-50 p-4'>
                        <div>
                            <h1 className='text-2xl'>{title}</h1>
                            <p>
                                <span className='text-lg font-semibold'>Price: &#36;<small>{price}</small></span>
                            </p>
                            <img className='rounded-md my-4 w-full h-auto' src={thumbnail_url} alt="Service Thumbnail" />
                            <p className=''>{description}</p>
                        </div>
                        {/* Review Area */}
                        <div className='mt-10'>
                            <h1 className='text-2xl border-b border-gray-300 pb-3'>Reviews</h1>
                            <div className='mt-5'>
                                {
                                    reviews !== null && (reviews.length > 0 ?
                                        reviews.map(review =>
                                            <div key={review?._id} className='flex shadow-lg border border-gray-200 mb-5 rounded-md'>
                                                <div className='w-20 flex justify-center items-center'>
                                                    <img className='w-12 h-12 rounded-full' src={review?.authorPhotoUrl} alt='Review Author Profile' />
                                                </div>
                                                <div className='flex-1 px-3 py-2'>
                                                    <h3 className='text-lg'>{review?.ratingText}</h3>
                                                    <p className='flex items-center gap-2'>
                                                        <Rating readonly initialValue={review?.rating} SVGclassName='inline-block' iconsCount={5} allowFraction={true} size='20' className='m-0' />
                                                        <span className='mt-1'>({review?.rating})</span></p>
                                                    <p className='italic text-lg'><small>{review?.authorName}</small></p>
                                                </div>
                                                {
                                                    review?.authorID === user?.uid &&
                                                    <div className='px-3 flex items-center'>
                                                        <button onClick={() => reviewDeleteHandler(review?._id)} className='w-10 h-10 bg-red-100 rounded-full flex justify-center items-center text-red-500'><TrashIcon className='w-5 h-5' /></button>
                                                    </div>
                                                }

                                            </div>
                                        ) :
                                        <p className='py-2 text-center rounded-md bg-red-100 text-red-500'>No Reviews</p>
                                    )
                                }
                            </div>

                            {
                                user !== null ?
                                    <div className='mt-10 pl-5'>
                                        <form onSubmit={reviewAddHandler} className='shadow-lg p-4'>
                                            <h3 className='border-b inline-block text-xl mb-5 pb-2 border-gray-600'>Give Review</h3>
                                            <input className='px-3 py-2 w-full rounded-md focus:outline-violet-500' type='text' placeholder='Enter Your Review' name='rating_text' required />
                                            <div className='mt-4'>
                                                <Rating onClick={(e) => setRating(e)} initialValue={rating} SVGclassName='inline-block' iconsCount={5} allowFraction={true} size='30' className='m-0' />
                                            </div>
                                            <button type='submit' className='bg-green-500 text-slate-50 px-5 py-2 mt-5'>Submit</button>
                                        </form>
                                    </div>
                                    :
                                    <p className='mt-5 text-center py-5'>You must <button onClick={navigateToLogin} className='text-blue-600 underline hover:no-underline'>login</button> to add a review.</p>
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleService;
