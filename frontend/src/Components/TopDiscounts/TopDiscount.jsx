import React, { useState } from 'react';
import './TopDiscount.css';
import topDiscountImg1 from '../../Assets/topDiscountImg1.png';
import topDiscountImg2 from '../../Assets/topDiscountImg2.png';
import topDiscountImg3 from '../../Assets/topDiscountImg3.png';
import topDiscountImg4 from '../../Assets/topDiscountImg4.png';

const TopDiscount = ({ discounts = [] }) => {
  console.log(discounts, "this is the discounts");

  const [items, setItems] = useState([
    { name: 'Gizzards', currentPrice: 'N6000', oldPrice: 'N4500' },
    
  ]);

  return (
    <div>
      <div className='discountTop'>
        <h2>Top Discounts</h2>
        <div className='discountTopOne'>
          <p>Free Delivery on orders above N300,000</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className='discounts'>
        <div className='discountOne'>
          <div className='discountTwo'>
            <div>
              <img src={topDiscountImg2} alt="" />
            </div>
          </div>
          <div className='discountThree'>
            <div>
              {items.map((item, index) => (
                <div key={index}>
                  <span>{item.name}</span>
                  <span>{item.currentPrice}</span>
                  <span>{item.oldPrice}</span>
                </div>
              ))}
            </div>
            <div className='topDiscountFour'>
              <img src={topDiscountImg4} alt="" />
            </div>
          </div>
        </div>
        
        <div className='discountOne'>
          <div className='discountTwo'>
            <div>
              <img src={topDiscountImg3} alt="" />
            </div>
          </div>
          <div className='discountThree'>
            <div>
              {items.map((item, index) => (
                <div key={index}>
                  <span>{item.name}</span>
                  <span>{item.currentPrice}</span>
                  <span>{item.oldPrice}</span>
                </div>
              ))}
            </div>
            <div className='topDiscountFour'>
              <img src={topDiscountImg4} alt="" />
            </div>
          </div>
        </div>
        <div className='discountOne'>
          <div className='discountTwo'>
            <div>
              <img src={topDiscountImg1} alt="" />
            </div>
          </div>
          <div className='discountThree'>
            <div>
              {items.map((item, index) => (
                <div key={index}>
                  <span>{item.name}</span>
                  <span>{item.currentPrice}</span>
                  <span>{item.oldPrice}</span>
                </div>
              ))}
            </div>
            <div className='topDiscountFour'>
              <img src={topDiscountImg4} alt="" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TopDiscount;
