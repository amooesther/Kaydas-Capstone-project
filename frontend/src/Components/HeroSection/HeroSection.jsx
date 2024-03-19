import React from 'react'
import search from '../../Assets/search.png'
import heroImg1 from'../../Assets/heroImg1.png'
import heroImg2 from'../../Assets/heroImg2.png'
import heroImg3 from'../../Assets/heroImg3.png'
import './HeroSection.css'
const HeroSection = () => {
  return (
    <div className='heroWrapper'>
    <div className='heroOne'>
      <h1 className='heroText'>
        Enjoy affordable doorstep delivery of your <span>fresh frozen proteins!</span>
      </h1>
      <div className='inputWrapper'>
       
          <div className='searchWrapper'>
            <img src={search} alt='' className='searchIcon' />
            <input type='text' placeholder='What are you searching for' className='searchInput' />
          </div>
          <button type='submit' className='searchButton'>Search</button>
       
      </div>
    </div>
    <div className='heroTwo'>
      <div><img src={heroImg1} alt='' /></div>
      <div><img src={heroImg2} alt='' /></div>
      <div><img src={heroImg3} alt='' /></div>
    </div>
  </div>
  
  )
}

export default HeroSection