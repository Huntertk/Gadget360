import React from 'react'
import { BsCartFill, BsCart,BsTextRight,BsXLg } from "react-icons/bs";
import './product.css'

const Products = () => {
  return (
    <div className='product-main-container'>
      <h1>All Products</h1>
      <div className="product-container">
        <img className='product-img' src="https://cdn.shopify.com/s/files/1/0548/8849/7221/products/Thumbnail1_700x700.jpg?v=1679547407" alt="" />
        
        <div className="product-details-wrapper">
        <div className="product-details">
            <p className="name">Boult X60</p>
            <p className="price">₹ 1499</p>
        </div>
            <BsCart  className='product-cart'/>
        </div>
      </div>
    </div>
  )
}

export default Products
