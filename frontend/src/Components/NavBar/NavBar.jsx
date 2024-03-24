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
    <li onClick={()=>{setMenu('Home')}}><Link style={{textDecoration:'none'}} to='/' >Home</Link></li>
    <li onClick={()=>{setMenu('aboutUs')}}><Link style={{textDecoration:'none'}} to='/aboutUs' >About Us</Link></li>
    <li onClick={()=>{setMenu('contactUS')}}><Link style={{textDecoration:'none'}} to='/contactUS' >Contact US</Link></li>
    <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'none'}} to='./shop' >Shop</Link></li>
    <li onClick={()=>{setMenu('subscription')}}><Link style={{textDecoration:'none'}} to='/subscription' >Subsription</Link></li>
</ul>
<div className='newLoginCart'>
<img src={heart} alt="cart" />
<div className='cartCount'>0</div>
<Link to='./cart'><img src={cart} alt="cart" /></Link>
<div className='cartCount'>0</div>
<Link to='./Login'><button>Login</button></Link> 

  
   
  
</div>
    </div>
  )
}

export default NavBar