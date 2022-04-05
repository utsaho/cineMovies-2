import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const CustomerReview = ({ numberOfReviews }) => {
    const [reviews, setReviews] = useReviews();
    const slicedReview = reviews.slice(0, numberOfReviews)
    return (
        <div className='mt-14 customer-reviews'>
            <h2 className='text-4xl text-center font-bold'>Customer Reviews({reviews.length})</h2>
            <div className='grid sm:grid-cols-3 gap-6 mt-8 mx-5'>
                {
                    slicedReview.map(review => <Review review={review} key={review.id}></Review>)
                }
            </div>
        </div>
    );
};

export default CustomerReview;