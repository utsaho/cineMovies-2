import React from 'react';
import { Link } from 'react-router-dom';
import CustomerReview from '../CustomerReview/CustomerReview';
import MovieDetail from '../MovieDetail/MovieDetail';

import './Home.css'
const Home = () => {
    return (
        <div>
            <MovieDetail></MovieDetail>
            <CustomerReview numberOfReviews={3}>Customers Reviews (3)</CustomerReview>
            <div className='text-center mt-5 mb-10'>
                <Link to='/reviews' className='bg-violet-800 text-white px-10 py-2 rounded-md hover:bg-black'><strong>See all reviews</strong></Link>
            </div>
        </div>
    );
};

export default Home;