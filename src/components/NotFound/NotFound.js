import React from 'react';
import { EmojiSadIcon } from '@heroicons/react/solid'

const NotFound = () => {
    return (
        <div className='relative notFound'>
            <div>
                <h2 className='text-center w-full'>
                    <EmojiSadIcon className='w-24 h-24 text-center'></EmojiSadIcon>
                </h2>
            </div>
        </div>
    );
};

export default NotFound;