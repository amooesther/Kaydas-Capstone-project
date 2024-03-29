import React, { useState } from 'react';
import './Delivery.css';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import arrowLeftBlue from '../../Assets/arrowLeftBlue.png';
import deliveryImg from '../../Assets/deliveryImg.png';
import Footer from '../../Components/footer/Footer.jsx'

const Delivery = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <NavBar />
      <div className='deliveryOne'>
        <img src={arrowLeftBlue} alt="" />
        <h1>Delivery status</h1>
      </div>
      <div className='deliveryMap'>
        <div>
          <iframe
            width="100%"
            height="300px"
            
            src="https://maps.google.com/maps?width=100%25&amp;height=500px&amp;hl=en&amp;q=Abuloma%20Port%20Harcourt%20Nigeria+(Kaydas%20cold%20Room)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
      </div>
      <div className='deliveryTwo'>
        <h3>Estimated time of delivery</h3>
        <h3>00:00</h3>
      </div>
      <div className='deliveryThree'>
        <div>
          <img src={deliveryImg} alt="" />
        </div>
        <div className='deliveryThreeTwo'>
          <h2>Paul Joe ⭐⭐⭐⭐⭐</h2>
          <h3>Your delivery guy</h3>
          <p>
            Paul Joe is vaccinated and was sanitized before the protein was
            handed over to him for delivery. His body temperature is normal.
          </p>
        </div>
      </div>
      <div className='deliveryFour'>
        <h3>Track your order</h3>
     
        <div>
          <div className="radio-container">
            <input
              type="radio"
              id="orderConfirmed"
              name="orderStatus"
              value="option1"
              checked={selectedValue === "option1"}
              onChange={() => handleRadioChange("option1")}
            />
            <label htmlFor="orderConfirmed" className="radio-inner"></label>
          </div>
          <label htmlFor="orderConfirmed">Order Confirmed: Your order has been received</label>
          <br />
          <div className="radio-container">
            <input
              type="radio"
              id="orderNotConfirmed"
              name="orderStatus"
              value="option2"
              checked={selectedValue === "option2"}
              onChange={() => handleRadioChange("option2")}
            />
            <label htmlFor="orderNotConfirmed" className="radio-inner"></label>
          </div>
          <label htmlFor="orderNotConfirmed">Order is being prepared
your order is getting prepared</label>
        </div>
        <div className="radio-container">
            <input
              type="radio"
              id="orderConfirmed"
              name="orderStatus"
              value="option1"
              checked={selectedValue === "option1"}
              onChange={() => handleRadioChange("option1")}
            />
            <label htmlFor="orderConfirmed" className="radio-inner"></label>
          </div>
          <label htmlFor="orderConfirmed">Order Prepared
Your order has been prepared</label>
          <br />
          <div className="radio-container">
            <input
              type="radio"
              id="orderConfirmed"
              name="orderStatus"
              value="option1"
              checked={selectedValue === "option1"}
              onChange={() => handleRadioChange("option1")}
            />
            <label htmlFor="orderConfirmed" className="radio-inner"></label>
          </div>
          <label htmlFor="orderConfirmed">Delivery in process
Hang on, your order is on the way</label>
          <br />
          <div className="radio-container">
            <input
              type="radio"
              id="orderConfirmed"
              name="orderStatus"
              value="option1"
              checked={selectedValue === "option1"}
              onChange={() => handleRadioChange("option1")}
            />
            <label htmlFor="orderConfirmed" className="radio-inner"></label>
          </div>
          <label htmlFor="orderConfirmed">Delivery successfully done
Thank you for choosing us</label>
          <br />
          <button className='deliveryBtn'>Track Order</button>
      </div>
      
      
      <Footer/>
    </div>
  );
};

export default Delivery;
