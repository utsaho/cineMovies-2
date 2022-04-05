import React from 'react';
import { useEffect, useState } from 'react';

// import './Home.css'
const MovieDetail = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('movieData.json').then(res => res.json()).then(data => setMovies(data));
    }, []);
    const movie = movies[parseInt(Math.random() * movies.length)];

    return (
        <div className='grid grid-rows-2 grid-flow-col mt-10 mx-10 px-10 '>
            <div className='mt-20 md:row-span-3 sm:col-span-1'>
                <h2 className='text-6xl'>Name: <strong><span className='text-blue-700'>{movie ? movie.name : ''}</span></strong></h2>
                <h4 className='text-2xl mt-5 p-5 mb-5' >{movie ? movie.story : ''}</h4>
                {/* 
                    //! You can add a dynamic link from IMDB
                 */}
                <a href='https://www.google.com/' target='blank' className='p-5 bg-indigo-200 font-bold ml-5 rounded-md hover:bg-indigo-300'>Watch Live</a>
            </div>
            <div className='w-full border-4 md:row-span-3 sm:col-span-1 mt-5'><img src={`${movie ? movie.img : ''}`} className='h-full' alt="" /></div>
        </div>
    );
};

export default MovieDetail;