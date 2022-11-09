import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import MyReviewsItem from '../../components/MyReviewsItem/MyReviewsItem';
import { UserContext } from '../../contexts/UserContextProvider/UserContextProvider';

const MyReviews = () => {

    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState(null);

    const { user, serverRootURL } = useContext(UserContext);

    // delete review 
    const reviewDeleteHandler = (reviewID) => {
        const url = `${serverRootURL}reviews/${reviewID}`;
        fetch(url, { method: 'DELETE' })
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

    useEffect(() => {
        const url = `${serverRootURL}my-reviews/${user?.uid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setReviews(data)
            })
            .catch(err => console.error(err));

    }, []);

    return (
        <div className='container mx-auto py-10 px-5 '>
            {/* react helmet */}
            <Helmet><title>My Reviews</title></Helmet>
            <div className='w-11/12 lg:w-9/12 lg:mx-auto rounded-lg border border-gray-100 shadow-lg px-4 py-5'>
                <h1 className='text-3xl text-center border-b border-gray-200 pb-5'>My All Reviews</h1>
                {
                    loading ?
                        <div className='mt-5 h-72 flex justify-center items-center'>
                            <span className='block w-12 h-12 rounded-full border-4 border-gray-500 border-t-slate-200 animate-spin'></span>
                        </div>
                        :
                        <div className='mt-5'>
                            {reviews !== null && reviews.length > 0 ? reviews.map(review => <MyReviewsItem key={review?._id} review={review} reviewDeleteHandler={reviewDeleteHandler} />)
                                :
                                <p className='text-lg mt-8 bg-red-100 rounded-md py-2 text-center text-red-600'>No reviews were added</p>
                            }
                        </div>
                }

            </div>
        </div>
    );
}

export default MyReviews;
