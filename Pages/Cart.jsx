import React, { useContext,useEffect } from 'react'
import { BsTrash,BsFillTrashFill } from "react-icons/bs";
import './cart.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Context } from '../Components/Context'
const Cart = () => {
  const context = useContext(Context)
  const total = context.cartItems.reduce((total, current) => {
    return total += current.price
  },0)
console.log(total)
  const renderCart = context.cartItems.map((item) => {
    return <div key={item.id} className="cart-item-container"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
    >
            <span className='name'>{item.name}</span>
            <div className='botton-cart-container'>
              <img className='cart-img' src={item.img} alt={item.name} />
              <span className='price'>₹ {item.price}</span>
              <BsTrash onClick={() => {
                context.removeCart(item.id)}}/>
            </div>
          </div>
  })
 

   useEffect(() => {
    Aos.init()
  },[])
  return (
    <div className='cart-container'>
      <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/551-Desktop_2_1440x.jpg?v=1682661291" alt="" className='background-img'/>
      <h1>Cart</h1>

    { context.cartItems.length > 0 ? renderCart  : <h1>Your Cart Is Empty</h1>}
    
    
    <h3>Total : ₹ {total}</h3> 
    </div>
  )
}

export default Cart
