import React from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import arrowLeftBlue from '../../Assets/arrowLeftBlue.png'
import heart from '../../Assets/heart.png'
import location from '../../Assets/location.png'
import clock from '../../Assets/clock.png'
import './Description.css'
import fishOne from '../../Assets/FishOne.png'
import Button from '../../Components/Button/Button.jsx'
import Footer from '../../Components/footer/Footer.jsx'
import { Link } from 'react-router-dom'


const Description = () => {
  return (
    <div>
      <NavBar/>
      <div className='description'>
        <div className='descriptionLeft'>
          <div>
          <div className='descriptionLeftUp'>
            <img src={arrowLeftBlue} alt="" />
            <p>Product details</p>
            <img src={heart} alt="cart" />
           
           
          </div>
          <img src={fishOne} alt="" className='fish'/>
          <h4>Product Description</h4>
            <p className='descP'>Frozen fish  has a wide variety of
               associated health benefits, including its
                ability to boost overall metabolism, speed
                 up repair and growth throughout the body, 
                 build strong bones,
               reduce the risk of various chronic diseases.</p>
               <span className='spanOne'>Medium 20kg</span>
               <h5>Croaker</h5>
               <div className='spanTwo'>
                <span className='spanTwoOne'>⭐4.5</span>
                <div className='spanTwoTwo'>Stone Cold</div>
               </div>
               <span className='spanOne'>80% of people suggest this product</span>
               <div className='descriptionLeftDown'>
                <div>Quantity</div>
                <div className=' descriptionDown'>-</div>
                <div  className=' descriptionDownOne'>2</div>
                <div className=' descriptionDown'>+</div>

               </div>
               </div>
           <Link to='/cart'>  <div className='descBtn'><Button>Add to Cart</Button></div></Link>  
        </div>
        <div className='descriptionRight'>
          <h4>Delivery Options</h4>
          <select id="Location" name="membership" className='selectLocation'>
      <option value="Location">Choose Location</option>
      <option value="location">Location</option>
      <option value="location">Location</option>
      <option value="Location">Location</option>
    </select>
     <div className='map'><iframe width="220" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=250&amp;height=250&amp;hl=en&amp;q=abuloma%20port%20harcourt+(My%20Business%20Name)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/" className='frame'>gps trackers</a></iframe></div>
       <div className='location'>
        <img src={location} alt="" />
        <span>No 6 jetty rd Abuloma portharcourt</span>
       </div>
       <div className='buttons'>
 <Link to='/contactUs'><button className='buttOne'><img src={clock} alt="" /> ASAP</button></Link> 
 <Link to='/contactUs'><button className='buttTwo'> <img src={clock} alt="" /> Schedule</button></Link> 
       </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Description