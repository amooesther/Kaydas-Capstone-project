import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import cartIcon from '../../Assets/cart.png';
import itemImg1 from '../../Assets/ItemImg1.png';
import Button from '../../Components/Button/Button.jsx';
import './Cart.css';
import ChickenItems from '../../Components/Chicken/ChickenItems.jsx';
import ChickenWhole from '../../Components/ChickenWhole/ChickenWhole.jsx';
import Footer from '../../Components/footer/Footer.jsx'
import Wholesale from '../../Components/Wholesale/Wholesale.jsx';
const Cart = () => {
  const [savedItems, setSavedItems] = useState([
    {
      id: 1,
      itemImg: itemImg1,
      title: 'Natundo',
      weight: '20kg',
      description: 'stone cold',
      itemType: 'Broiler',
      price: '60,000',
    },
    
  ]);


  const repeatItemWrap = () => {
    return [...Array(5)].map((_, index) => (
      <div key={index} className='itemWrap'>
        
        <img src={itemImg1} alt="" />
        <div>
          <h3>Natundo</h3>
          <div className='itemOne'>
            <div>20kg</div>
            <div>stone cold</div>
          </div>
          <div className='itemCard'>
            <div>
              <p>Broiler</p>
              <span>type</span>
            </div>
            <div>
              <p>60,000</p>
              <span>price</span>
            </div>
          </div>
          <div className='btnWrapper'>
            <div><Button variant='tertiaryOne' size='small'>View details</Button></div>
            <div><Button variant='tertiaryTwo' size='small'>Add to cart</Button></div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <NavBar />
      <div className='emptyCart'>
        <div className='cartWrap'>
          <div className='cartImg'><img src={cartIcon} alt="" /></div>
          <div className='count'>0</div>
        </div>
      </div>
      
      <div className='cartCards'>
      <h2>Saved Items</h2>
      <div className='itemWrapper'>
        
        {repeatItemWrap()}
      </div>
      </div>
      <ChickenItems/>
      <ChickenWhole/>
      <Wholesale/>
      <Footer/>
    </div>
  );
};

export default Cart;
