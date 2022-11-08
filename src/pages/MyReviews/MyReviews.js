import React, { useState, useEffect, useContext } from 'react';
import MyReviewsItem from '../../components/MyReviewsItem/MyReviewsItem';
import { UserContext } from '../../contexts/UserContextProvider/UserContextProvider';

const MyReviews = () => {

    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState(null);

    const { user, serverRootURL } = useContext(UserContext);

    useEffect(() => {
        const url = `${serverRootURL}my-reviews/${user?.uid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err));

    }, []);

    return (
        <div className='container mx-auto py-10 px-5 '>
            <div className='w-11/12 lg:w-9/12 lg:mx-auto rounded-lg border border-gray-100 shadow-lg px-4 py-5'>
                <h1 className='text-3xl text-center border-b border-gray-200 pb-5'>My All Reviews</h1>
                <div className='mt-5'>
                    {reviews !== null && reviews.length > 0 ? reviews.map(review => <MyReviewsItem key={review?._id} review={review} />)
                        :
                        <p className='text-lg mt-8 bg-red-100 rounded-md py-2 text-center text-red-600'>No Reviews Found</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default MyReviews;
