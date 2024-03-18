import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import NavBar from '../../Components/NavBar/NavBar'
import Services from '../../Components/Services/Services'
import TopDiscount from '../../Components/TopDiscounts/TopDiscount'


const Home = () => {
  return (
    <div>
<NavBar/>
<HeroSection/>
<Services/>
<TopDiscount/>
      
    </div>
  )
}

export default Home