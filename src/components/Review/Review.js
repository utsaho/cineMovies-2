import React from 'react';
import './Review.css';
import Star from '../Star/Star';

const Review = ({ review }) => {
    let rating = review.rating;
    let temp = [];
    const halfStart = (rating - parseFloat(parseInt(review.rating))) > 0.0 ? true : false;
    for (let i = 0; i < rating - 1; i++) {
        temp.push({ id: i });
    }
    return (
        <div className='hover:bg-violet-200 rounded-xl shadow-2xl p-5 '>
            <div className='border-5 text-center flex items-center'>
                <img src={review.img} className=' h-14 rounded-full' alt="" />
                <div className='ml-5'>
                    <h2 className='text-center'>{review.name}</h2>
                    <h2>
                        Ratings:
                        <small className='text-orange-700 ml-2'>
                            {
                                temp.map(r => <Star isHalf={true} key={r.id}></Star>)
                            }
                            {halfStart ? <Star isHalf={false} key={11}></Star> : <Star isHalf={true} key={10}></Star>}
                        </small>
                        ({review.rating})
                    </h2>
                </div>
            </div>
            <div>
                <p>{review.review}</p>
            </div>

        </div>
    );
};

export default Review;