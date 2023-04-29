import React, { useContext } from 'react'
import { Context } from './Context' 
import { BsCartFill, BsCart,BsTextRight,BsXLg } from "react-icons/bs";
import { AiFillStar,AiFillLeftCircle,AiFillRightCircle } from "react-icons/ai";

const ProductsContainer = (props) => {
    const context = useContext(Context)
    // console.log(context)
    // console.log(props.product);


    const cartIcons = () => {
    const alreadyInCart = context.cartItems.some((item) => {
      return item.id === props.product.id
    })
    if(alreadyInCart){
       return  <BsCartFill className='product-cart' onClick={() => {
            context.removeCart(props.product.id)
        }} />
    } else {
       return <BsCart className='product-cart' onClick={() => {
            context.addItemToCart(props.product)
        }} />
    }
  }

cartIcons()
  return (
    <div  className="product-container"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
        <img className='product-img' src={props.product.img} alt="" />
        
        <div className="product-details-wrapper">
        <div className="product-details">
            <p className="product-name">{props.product.name}</p>
            <p className="product-price">₹ {props.product.price}</p>
            <AiFillStar className='star-icon' /> <span className='rating'>{props.product.rating}</span>
        </div>
            {/* <BsCart  className='product-cart' onClick={() => {
              context.addItemToCart(props.product)
            }}/> */}
            {cartIcons()}
        </div>
      </div>
  )
}

export default ProductsContainer
