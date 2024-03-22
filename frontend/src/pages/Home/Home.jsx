import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import NavBar from '../../Components/NavBar/NavBar'
import Services from '../../Components/Services/Services'
import TopDiscount from '../../Components/TopDiscounts/TopDiscount'
import Footer from '../../Components/footer/Footer'
import BestSellers from '../../Components/BestSellers/BestSellers'


const Home = () => {
  return (
    <div>
     
<NavBar/>
<HeroSection/>
<Services/>
<TopDiscount/>
<BestSellers/>
<Footer/>
      
    </div>
  )
}

export default Home