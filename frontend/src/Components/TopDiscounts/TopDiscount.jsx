import React from 'react';
import './TopDiscount.css';
// import topDiscountImg1 from '../../Assets/topDiscountImg1.png';
// import topDiscountImg2 from '../../Assets/topDiscountImg2.png';
// import topDiscountImg3 from '../../Assets/topDiscountImg3.png';

const TopDiscount = ({ discounts = [] }) => {
  console.log(discounts, "this is the discounts");
  return (
    <ul>
      {discounts?.map((discount) => (
        <li className="categoryItem" key={discount.id}>
          <img src={discount.imgSrc} alt={discount.title} /> 
          <span>{discount.title}</span>
          <span>{discount.newPrice}</span>
          <span>{discount.oldPrice}</span>
        </li>
      ))}
    </ul>
  );
};

export default TopDiscount;
