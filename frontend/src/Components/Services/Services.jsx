import React from 'react'
import './Services.css'
import servicesImg1 from'../../Assets/servicesImg1.png'
import servicesImg2 from'../../Assets/servicesImg2.png'
import servicesImg3 from'../../Assets/servicesImg3.png'
import servicesImg4 from'../../Assets/servicesImg4.png'
import servicesImg5 from'../../Assets/servicesImg5.png'
import servicesImg6 from'../../Assets/servicesImg6.png'

const Services = () => {
  return (
    <div className='serviceWrapper'>
        <div className='serviceOne'>
           <div className='serviceUp'> 
            <h1>Our services</h1>
            <p>Kaydas cold room prioritizes customer's satisfaction over every other things</p>
         <button>Learn more</button></div>
         </div>
         <div className='serviceTwo'>
            <div><img src={servicesImg1} alt="" />
            <h3>Delivery</h3>
            <p>Delivery: Enjoy prompt and reliable doorstep delivery for your convenience.</p>
            </div>
            <div><img src={servicesImg2} alt="" />
            <h3>Tracking</h3>
            <p> Stay updated with live tracking of your orders for peace of mind</p>
            </div>
            <div><img src={servicesImg3} alt="" />
            <h3>Subscription</h3>
            <p>Unlock exclusive benefits and savings with our subscription plans..</p>
            </div>
            <div><img src={servicesImg4} alt="" />
            <h3>Multi-Payment Option</h3>
            <p>Multi-payment Option: Choose from various payment methods for hassle free transaction.</p>
            </div>
            <div><img src={servicesImg5} alt="" />
            <h3>Referral Program</h3>
            <p>Earn incentives by sharing our platform with friends and family.</p></div>
            <div><img src={servicesImg6} alt="" />
            <h3>Order History</h3>
            <p>Keep track of all your purchases and sales in one convenient place.</p></div>
         </div>
    </div>
  )
}

export default Services