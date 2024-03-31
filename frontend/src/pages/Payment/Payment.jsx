import React from 'react'
import './Payment.css'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import paystack from '../../Assets/paystack.png'
import card from '../../Assets/card.png'
import bank from '../../Assets/bank.png'
import USSD from '../../Assets/USSD.png'
import Footer from '../../Components/footer/Footer.jsx'
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <div>
        <div >
        <NavBar/>
        <div className='payStackWrap'>
        <div className='payStackWrapOne'>
        <div className='paystack'>
            <img src={paystack} alt="" />
            <p>Powered by Paystack</p>
           
        </div>
        <div className='logo'>LOGO</div>

        </div>
        <div className='payStackWrapTwo'>
            <p>Close Payment</p>
            <p> <span>NGN</span> 30,600.00</p>
            <p>chiomamatthew@gmail.com</p>
        </div>
        </div>
        </div>
        <div className='paymentWrap'>
            <h2>How would you like to pay?</h2>
          <Link to='/card' style={{ textDecoration: 'none' }}>  <div className='pay'>
            <img src={card} alt="" /> 
            <p>  Pay with Card</p>
            </div></Link>
            <div className='pay'>
            <img src={USSD} alt="" />
            <p> Pay with USSD</p>
            </div>
    <Link to="/transfer" style={{ textDecoration: 'none' }}>    <div className='pay'>
           <img src={bank} alt="" /> 
           <p>Pay with Bank</p>
           </div></Link>   
            
            
        </div>
        <Footer/>
    </div>
  )
}

export default Payment