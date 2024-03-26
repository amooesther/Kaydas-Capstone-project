import React from 'react'
import './Order.css'
import NavBar from '../../Components/NavBar/NavBar.jsx'




    const Order = ({
        orderItems = []
    }) => {
        console.log(orderItems, "this is the OrderItems")
        return(<div>
             <NavBar/>
            {
             orderItems?.map((order) => {
                return <li className='orderItem' key={order.id}>{order.img1} {order.img2}</li>
             })
            }
        </div>);
    }
    
    


export default Order