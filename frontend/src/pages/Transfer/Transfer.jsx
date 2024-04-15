import React from 'react';
import './Transfer.css';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/footer/Footer.jsx'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Transfer = () => {
  const totalAmount = useSelector(state => state.cart.totalAmount);
  console.log("Total Amount:", totalAmount); 


  return (
    <div className='transfer'>
        <NavBar/>
        <div className='transferOne'>
        <div className='logo'>LOGO</div>

        
        <div className='TransferTwo'>
            
            <p> <span>NGN</span>{totalAmount}</p>
            <p>chiomamatthew@gmail.com</p>
        </div>
        
        </div>
        <h3>Please proceed to your banking app to complete this bank transfer.</h3>
       <div className='transferThree'>
        <p>Amount</p>          
         <p> <span>NGN</span>{totalAmount}</p>
       </div>
       <div className='ruler'></div>
       <div className='transferThree'>
        <p>Account Number</p>          
         <p> </p>
       </div>
       <div className='ruler'></div>
       <div className='transferThree'>
        <p>Bank Name</p>          
         <p> </p>
       </div>
       <div className='ruler'></div>
       <div className='transferThree'>
        <p>Beneficiary</p>          
         <p> </p>
       </div>
       <div className='ruler'></div>
       <div className='transferPay'>
 <Link to="/receipt">      <button  className='transferPayButton'><span>Pay</span> <span>NGN</span>{totalAmount} </button></Link> 
      </div>
      <div className='transPay'>
        <h4>Change Payment Method</h4>
        <button > X Cancel Payment</button>
      </div>
      <Footer/>
        </div>
  )
}

export default Transfer