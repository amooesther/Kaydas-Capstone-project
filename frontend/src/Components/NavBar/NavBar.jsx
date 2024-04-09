import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../Assets/logo.png';
import cart from '../../Assets/cart.png';
import heart from '../../Assets/heart.png';
import userAvatar from '../../Assets/userAvatar.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menu, setMenu] = useState('shop');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false); 

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className='navBar'>
      <div className='navLogo'>
        <img src={logo} alt='Logo' />
      </div>
     
      <div className='toggleButton' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
     
      <ul className={`navMenu ${menuVisible ? 'active' : ''}`}>
        <li onClick={() => setMenu('Home')}>
          <Link style={{ textDecoration: 'none' }} to='/'>
            Home
          </Link>
        </li>
        <li onClick={() => setMenu('aboutUs')}>
          <Link style={{ textDecoration: 'none' }} to='/aboutUs'>
            About Us
          </Link>
        </li>
        <li onClick={() => setMenu('contactUS')}>
          <Link style={{ textDecoration: 'none' }} to='/contactUS'>
            Contact US
          </Link>
        </li>
        <li onClick={() => setMenu('subscription')}>
          <Link style={{ textDecoration: 'none' }} to='/subscription'>
            Subscription
          </Link>
        </li>
      </ul>
     
      <div className='newLoginCart'>
        <Link to='/myorders'>
          <img src={heart} alt='cart' />
        </Link>
        <div className='cartCount'>0</div>
        <Link to='./cart'>
          <img src={cart} alt='cart' />
        </Link>
        <div className='cartCount'>0</div>

        {isLoggedIn ? (
          <div className='user'>
            <div className='userAvatar'>
              <img src={userAvatar} alt='' />
            </div>
            <button onClick={handleLogout}>Hi Keno</button>
          </div>
        ) : (
          <Link to='./Login'>
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
