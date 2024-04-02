import React from 'react'
import './Order.css'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import order from '../../Assets/order.png'
import chevronRight from '../../Assets/chevronRight.png'




    const Order = ({
        orderItems = []
    }) => {
        console.log(orderItems, "this is the OrderItems")
        return(<div>
             <NavBar/>
            {/* {
             orderItems?.map((order) => {
                return <li className='orderItem' key={order.id}>{order.img1} {order.img2}</li>
             })
            } */}

            <div className='order'>
                <div className='orderItems'>
                    <img src={order} alt="" />
                    <p>Order</p>
                    <img src={chevronRight} alt="" />
                </div>
                <div className='orderItems'>
                    <img src={order} alt="" />
                    <p>Order</p>
                    <img src={chevronRight} alt="" />
                </div>
            </div>
        </div>);
    }
    
    


export default Order