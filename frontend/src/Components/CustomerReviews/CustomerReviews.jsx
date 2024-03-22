import React, { useState } from 'react';
import './CustomerReviews.css';
import Button from '../Button/Button.jsx';

const CustomerReviews = () => {
  const [rating] = useState(5); // Set the rating value here

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  return (
    <div className='customerWrapper'>
      <div className='reviewTop'>
        <div className='customer'>
          <h1>Customer Reviews</h1>
        </div>
      </div>

      <div className='overallRatings'>
        <div className='star'>
          <p>Overall Rating</p>
          <div>{renderStars()}</div>
          <div>23 reviews</div>
        </div>
        <div>
          <Button variant='secondary'>Write a Review</Button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CustomerReviews;
