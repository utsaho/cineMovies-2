import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import MovieDetail from '../MovieDetail/MovieDetail';

import './Home.css'
const Home = () => {
    return (
        <div>
            <MovieDetail></MovieDetail>
            <CustomerReview numberOfReviews={9}></CustomerReview>
        </div>
    );
};

export default Home;