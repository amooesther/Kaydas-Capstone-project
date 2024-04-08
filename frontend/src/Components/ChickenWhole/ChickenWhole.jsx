import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../Button/Button.jsx';
import './ChickenWhole.css'
import itemImg1 from '../../Assets/ItemImg1.png';
import { Link } from 'react-router-dom';


const ChickenWhole= () => {
  const navigate = useNavigate(); 
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
        return [...Array(4)].map((_, index) => (
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
                  <p>6,000</p>
                  <span>price</span>
                </div>
              </div>
              <div className='btnWrapper'>
              <Link to='/description'> <div><Button variant='tertiaryOne' size='small'>View details</Button></div></Link>
                <div><Button variant='tertiaryTwo' size='small'>Add to cart</Button></div>
              </div>
            </div>
          </div>
        ));
      };



  return (
    <div>
        <div className='cartCards'>
      <h2>Whole Chicken</h2>
      <div className='itemWrapper'>
        
        {repeatItemWrap()}
      </div>
      </div>
    </div>
  )
}

export default ChickenWhole