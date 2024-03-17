import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../Assets/logo.png'
import cart from '../../Assets/cart.png'
import heart from '../../Assets/heart.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
  const [menu, setMenu]=useState('shop');
  return (
    <div className='navBar'>
<div className='navLogo'>
    <img src={logo} alt="Logo" />
    
</div>
<ul className='navMenu'>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Shop</li>
    <li>subscription</li>
</ul>
<div className='newLoginCart'>
   <button>LOGIN</button> 
   <img src={heart} alt="cart" />
   <div className='cartCount'>0</div>
    <img src={cart} alt="cart" />
    <div className='cartCount'>0</div>
</div>
    </div>
  )
}

export default NavBar