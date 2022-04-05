import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';

const Reviews = () => {
    return (
        <div>
            <CustomerReview numberOfReviews={9}>What our customers say!</CustomerReview>
        </div>
    );
};

export default Reviews;