import React from 'react'
import Button from '../Button/Button'
import './BestSellers.css'
import topDiscountImg4 from "../../Assets/topDiscountImg4.png"
const BestSellers = () => {
  return (
    <div className='wrap'>
        <div className="bestTop">
            <h2>Best Sellers</h2>
            <Button>Shop Now</Button>
        </div>
<div className='bestWrap'>
<div className='bestImg'>
  <div className='image'>
    <div>image</div> 
  </div>
  <div className='imgDown'>
    <div>
      <span>Drumsticks</span>
      <span>NGN4,500</span>
      <span>⭐⭐⭐⭐⭐40+ Reviews</span>
    </div>
    <div>
      <img src={topDiscountImg4} alt="" />
    </div>
  </div>
</div>
<div className='bestImg'>
  <div className='image'>
    <div>image</div> 
  </div>
  <div className='imgDown'>
    <div>
      <span>Drumsticks</span>
      <span>NGN4,500</span>
      <span>⭐⭐⭐⭐⭐40+ Reviews</span>
    </div>
    <div>
      <img src={topDiscountImg4} alt="" />
    </div>
  </div>
</div>
<div className='bestImg'>
  <div className='image'>
    <div>image</div> 
  </div>
  <div className='imgDown'>
    <div>
      <span>Drumsticks</span>
      <span>NGN4,500</span>
      <span>⭐⭐⭐⭐⭐40+ Reviews</span>
    </div>
    <div>
      <img src={topDiscountImg4} alt="" />
    </div>
  </div>
</div>
</div>


    </div>
  )
}

export default BestSellers