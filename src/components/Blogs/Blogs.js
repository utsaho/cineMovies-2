import React from 'react';
import QnA from '../QnA/QnA';

const Blogs = () => {
    const qna = [
        { id: 0, question: 'What is context API?', ans: 'Context provides a way to pass data through the component tree from parent to child components, without having to pass props down manually by each level. Each component in Context is context-aware. Essentially, instead of passing props down through every single component on the tree, the components in need of a prop can simply ask for it, without needing intermediary helper components that only help relay the prop.' },

        { id: 1, question: 'What is semantic  tag?', ans: 'The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content. The HTML semantics tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible with better defining the different sections and layout of web pages. The pages made with semantic elements are much easier to read. has greater accessibility. It offers a better user experience.' },

        { id: 2, question: 'Difference between inline , inline-block , block', ans: 'Inline elements don’t start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are <span> , <strong>, and <img> tags. Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. You’ll have to declare display: inline-block in your CSS code.One common use for using inline-block is for creating navigation links horizontally.' }
    ];
    return (
        <div className='mt-10 mx-10 mb-10'>
            {
                qna.map(q => <QnA key={q.id} question={q}></QnA>)
            }
        </div>
    );
};

export default Blogs;