import React from 'react';
import './TopDiscount.css';
import topDiscountImg1 from '../../Assets/topDiscountImg1.png';
import topDiscountImg2 from '../../Assets/topDiscountImg2.png';
import topDiscountImg3 from '../../Assets/topDiscountImg3.png';
import topDiscountImg4 from '../../Assets/topDiscountImg4.png';

const TopDiscount = ({ discounts = [] }) => {
  console.log(discounts, "this is the discounts");
  return (
    // <ul>
    //   {discounts?.map((discount) => (
    //     <li className="categoryItem" key={discount.id}>
    //       <img src={discount.imgSrc} alt={discount.title} /> 
    //       <span>{discount.title}</span>
    //       <span>{discount.newPrice}</span>
    //       <span>{discount.oldPrice}</span>
    //     </li>
    //   ))}
    // </ul>
<div  >
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
            <span>Gizzards</span>
            <span>N6000</span>
            <span>N4500</span>
          </div>
          <div className='topDiscountFour'>
            <img src={topDiscountImg4} alt="" />
          </div>
        </div>
    </div>
    <div>
    <div className='discountOne'>
      <div className='discountTwo'>
        <div>
          <img src={topDiscountImg3} alt="" />
        </div>
        
      </div>
      <div className='discountThree'>
          <div>
            <span>Gizzards</span>
            <span>N6000</span>
            <span>N4500</span>
          </div>
          <div className='topDiscountFour'>
            <img src={topDiscountImg4} alt="" />
          </div>
        </div>
    </div>
    </div>
    <div>
    <div className='discountOne'>
      <div className='discountTwo'>
        <div>
          <img src={topDiscountImg1} alt="" />
        </div>
        
      </div>
      <div className='discountThree'>
          <div>
            <span>Gizzards</span>
            <span>N6000</span>
            <span>N4500</span>
          </div>
          <div className='topDiscountFour'>
            <img src={topDiscountImg4} alt="" />
          </div>
        </div>
    </div>
    </div>
  </div>
</div>

  );
};

export default TopDiscount;
