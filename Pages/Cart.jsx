import React, { useContext,useEffect, useState,useRef } from 'react'
import { BsTrash,BsFillTrashFill } from "react-icons/bs";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import './cart.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Context } from '../Components/Context'

const Cart = () => {
  const context = useContext(Context)
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    phNumber: ''
  })
  const [openModal, setOpenModal] = useState(false)
  const [isPaymentComplete, setIsPaymentComplete] = useState(false)
  const inputRef = useRef(null)

  const handleUserFormData = (e) => {
    setUserDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsPaymentComplete(true)
  }

  const total = context.cartItems.reduce((total, current) => {
    return total += current.price
  },0)
console.log(context.cartItems)
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
 

  const handleCompleteCart = () => {
    setOpenModal(true)
    inputRef.current.focus()
  }

   useEffect(() => {
    Aos.init()
  },[])
  return (
    <div className='cart-container'>
      <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/551-Desktop_2_1440x.jpg?v=1682661291" alt="" className='background-img'/>
      <h1>Cart</h1>

    { context.cartItems.length > 0 ? renderCart  : <h1>Your Cart Is Empty</h1>}
    
    {
      context.cartItems.length > 0 ? 
      <>
      <h3>Total : ₹ {total}</h3> 
    <button className='checkout-btn'
    onClick={handleCompleteCart}
    >Proceed To Checkout</button>
    </>
    : <h1 className='message-h1'>Please Add Item In Your Cart</h1>
    }
    
    
    <div 
    className={`formData rotate-scale-down ${openModal ? 'openModal' : ''}`}
    
    >
      {
        isPaymentComplete ? <div className="receipt-container">
          <h1>Thank You For Shopping With Us</h1>
          <p>Name : {userDetails.fullName}</p>
          <p>Phone : {userDetails.phNumber}</p>
          <p> Order id : {uuidv4()}</p>
          <p>Our Orders</p>
          {context.cartItems.map((item) => {
            return <p key={item.id}>{item.name}</p>
          })}
          <p>Total : ₹ {total}</p>
          
        </div> : 
   
        <form onSubmit={handleSubmit} className='form'>
          <input
          ref={inputRef}
          className='input-feild' 
          type="text" 
          name="fullName" 
          placeholder='Enter Your Full Name' 
          value={userDetails.fullName}
          onChange={handleUserFormData}
          required/>  
          <input
          className='input-feild' 
          type="text" 
          placeholder='Enter You Phone Number'
          name='phNumber'
          value={userDetails.phNumber}
          onChange={handleUserFormData}
          required/>
          <button type='submit' className='buy-btn'>Pay now</button>
        </form>
           }
      </div>
    </div>
  )
}

export default Cart
