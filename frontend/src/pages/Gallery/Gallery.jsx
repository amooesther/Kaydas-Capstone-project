import React from 'react'
import './Gallery.css'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import Button from '../../Components/Button/Button.jsx'
import TopDiscount from '../../Components/TopDiscounts/TopDiscount.jsx'
import Carousel from '../../Components/Carousel/Carousel.jsx'
import ChickenItems from '../../Components/Chicken/ChickenItems.jsx'
import ChickenWhole from '../../Components/ChickenWhole/ChickenWhole.jsx'
import Footer from '../../Components/footer/Footer.jsx'


const Gallery = () => {
  return (
    <div className='gallery'>
      <NavBar/>
      <div className='galleryWrapper'>
        <form action="">
          <input type="text" placeholder='Search Kaydas coldroom' />
       <Button>Search</Button>
       </form>
      </div>
       <TopDiscount/>
     <ChickenItems/>
     <ChickenWhole/>
     <ChickenWhole/>
     <ChickenWhole/>
     <Footer/>
       
     
    </div>
  )
}

export default Gallery