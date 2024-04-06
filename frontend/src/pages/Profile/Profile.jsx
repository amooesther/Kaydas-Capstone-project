import React from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import Order from '../../Components/OrderHistory/Order'
import './Profile.css'
import Footer from '../../Components/footer/Footer.jsx'

const Profile = () => {
  return (
    <div>
        <NavBar/>
        <div className='profile'>
      <div> <Order/></div> 
      <div>
        <div className='profileOne' >
          <p>orders</p>
          <div className='profileUp'>
            <p>In progress/Delivered</p>
            <p>Declined/Returned</p>
          </div>
          
        </div>
        <ul className='lists'>
            <li>Items</li>
            <li>Date Ordered</li>
            <li>Quantity</li>
            <li>Price</li>
            <li>Status</li>
          </ul>

          <h2>You havent Placed any orders yet</h2>
          </div>
        </div>
       
        <Footer/>
       
    </div>
  )
}

export default Profile