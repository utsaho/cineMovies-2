import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
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
        <div>
            <div className='border-5 text-center flex items-center'>
                <img src={review.img} className=' h-14 rounded-full' alt="" />
                <div className='ml-5'>
                    <h2>{review.name}</h2>

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium, esse optio accusamus, quidem consequatur doloremque fuga beatae sit distinctio a ipsam sint non, quaerat corporis numquam! Temporibus aspernatur perferendis odit recusandae impedit consequatur? Enim ipsam culpa corrupti porro repellendus fuga in provident similique laborum quisquam, et dolorem tempora at!
            </div>
            {/* <h1 className='text-2xl'>{review.name}</h1> */}

        </div>
    );
};

export default Review;