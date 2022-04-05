import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Star = ({ isHalf }) => {
    return (
        isHalf ? <FontAwesomeIcon icon={faStar} /> : <FontAwesomeIcon icon={faStarHalfAlt} />
    );
};

export default Star;