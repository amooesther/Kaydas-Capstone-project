import React from 'react';
import './Transfer.css';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/footer/Footer.jsx'
const Transfer = () => {
  return (
    <div className='transfer'>
        <NavBar/>
        <div className='transferOne'>
        <div className='logo'>LOGO</div>

        
        <div className='TransferTwo'>
            
            <p> <span>NGN</span> 30,600.00</p>
            <p>chiomamatthew@gmail.com</p>
        </div>
        
        </div>
        <h3>Please proceed to your banking app to complete this bank transfer.</h3>
       <div className='transferThree'>
        <p>Amount</p>          
         <p> <span>NGN</span> 30,600.00</p>
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
        <button  className='transferPayButton'><span>Pay</span> <span>NGN</span> 30,600.00 </button>
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