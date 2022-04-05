import React from 'react';

const QnA = ({ question }) => {
    return (
        <div className='mt-5 bg-indigo-100 rounded-xl p-10 hover:bg-indigo-200'>
            <h2 className='text-left text-3xl font-bold pl-10'>{question.question}</h2>
            <p className='px-10 mt-3 text-xl'>{question.ans}</p>
        </div>
    );
};

export default QnA;