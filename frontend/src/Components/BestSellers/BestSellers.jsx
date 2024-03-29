import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './BestSellers.css';
import topDiscountImg4 from '../../Assets/topDiscountImg4.png';
import Ratings from '../Ratings/Ratings';

const BestSellers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      name: 'Drumsticks',
      price: 'NGN4,500',
      rating: 4, // Example rating value
      reviews: '40+ Reviews',
      image: topDiscountImg4,
    },
    // Add more items as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className='wrap'>
      <div className="bestTop">
        <h2>Best Sellers</h2>
        <Button>Shop Now</Button>
      </div>
      <div className='bestWrap'>
        {[...Array(3)].map((_, index) => (
          <div key={index} className='bestImg'>
            <div className='image'>
              <div>image</div>
            </div>
            <div className='imgDown'>
              <div>
                <span>{items[activeIndex].name}</span>
                <span>{items[activeIndex].price}</span>
                <span>
                  <Ratings rating={items[activeIndex].rating} /> {items[activeIndex].reviews}
                </span>
              </div>
              <div>
                <img src={items[activeIndex].image} alt={items[activeIndex].name} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='chevrons'>
        <button className='chevron-left' onClick={handlePrev}>{'<'}</button>
        <button className='chevron-right' onClick={handleNext}>{'>'}</button>
      </div>
    </div>
  );
};

export default BestSellers;
