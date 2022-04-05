import React from 'react';
import { EmojiSadIcon } from '@heroicons/react/solid'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='icon'>
                {/* hello */}
                <h2 className='text-2xl'>
                    <EmojiSadIcon className='w-24 h-24 text-center'></EmojiSadIcon>
                    page not found
                </h2>
            </div>
        </div >
    );
};

export default NotFound;