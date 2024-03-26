import React from 'react'
import Button from '../Button/Button'
import './NutritionalTip.css'
const NutritionalTip = () => {
  return (
    <div>

<div className='formWrapper'>
     
     <h1 className='subscribe'>Subscribe to Our Nutritional Tips</h1>
   
     <form action=""className='formSubscribe'>
       <label htmlFor="">Enter your Email here</label>
       <div className='subInput'>
       <input type="email" />
        <Button>Search</Button>
       
       </div>
       
     </form>
  
 </div>
    </div>
  )
}

export default NutritionalTip