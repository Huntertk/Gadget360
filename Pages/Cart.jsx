import React, { useContext } from 'react'
import { BsTrash,BsFillTrashFill } from "react-icons/bs";
import './cart.css'
import { Context } from '../Components/Context'
const Cart = () => {
  const context = useContext(Context)
  console.log(context.cartItems)

  const renderCart = context.cartItems.map((item) => {
    return <div key={item.id} className="cart-item-container">
            <span className='name'>{item.name}</span>
            <div className='botton-cart-container'>
              <img className='cart-img' src={item.img} alt={item.name} />
              <span className='price'>₹ {item.price}</span>
              <BsTrash />
            </div>
          </div>
  })
 
  return (
    <div className='cart-container'>
      <h1>Cart</h1>

    { context.cartItems.length > 0 ? renderCart  : <h1>Your Cart Is Empty</h1>
    }
    
    
    <h3>Total : ₹ 0</h3> 
    </div>
  )
}

export default Cart
