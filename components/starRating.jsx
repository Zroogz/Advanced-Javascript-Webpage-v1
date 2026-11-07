import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const StarRating = ({ initialRating = 0 }) => {
    const [rating, setRating] = useState(initialRating);

    const handleStarClick = (newRating) => {
        setRating(newRating);
    };

    return (
        <span className="star-rating" style={{ display: 'inline-flex', gap: '4px', cursor: 'pointer', marginLeft: '10px' }}>
            {
                [...Array(5)].map((star, index) => {
                    const isFilled = (index + 1) <= rating;

                    return (
                        <span 
                            key={index} 
                            onClick={() => handleStarClick(index + 1)}
                            style={{ color: '#ffd700', fontSize: '1.2rem' }} // Gold color so they are clearly visible
                        >
                            {isFilled ? <FaStar /> : <FaRegStar />}
                        </span>
                    );
                })
            }
        </span>
    );
};

export default StarRating;