import React, { useState, useContext, useEffect } from 'react'
import { BsCartFill, BsCart,BsTextRight,BsXLg } from "react-icons/bs";
import { AiFillStar,AiFillLeftCircle,AiFillRightCircle } from "react-icons/ai";
import './product.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Context } from '../Components/Context';

const Products = () => {
  const context = useContext(Context)
  console.log(context)

  const [count, setCount] = useState(0)
  const backgroundData = [
    'https://www.mivi.in/cdn-cgi/image/width=2000,f=auto,quality=90/assets/homepage/banners/banner-11042023-pc.jpg',
    'https://www.mivi.in/cdn-cgi/image/width=2000,f=auto,quality=90/assets/homepage/banners/banner-22042023-pc.jpg',
    'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1550-desktop_9e577988-bcbd-491d-b353-b5d65ee9456b_1440x.jpg?v=1682661291',
    'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_desktop-new_1440x.jpg?v=1682347857',
    'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/DDnew-dimension_desktop_65851fdc-8162-46b6-b808-472ea00401b9_1440x.jpg?v=1682600881'
  ]

  const swappingImgLeft = () =>{
      if(count === 0) {
        setCount(backgroundData.length -1)
      } else{
        setCount((prev) => {
          return prev -1
        })
      }
  }

  const swappingImgRight = () =>{
      if(count === backgroundData.length -1) {
        setCount(0)
      } else{
        setCount((prev) => {
          return prev +1
        })
      }
  }


  const renderProduct = context.allProduct.map((product) => {
    return <div key={product.id} className="product-container"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
        <img className='product-img' src={product.img} alt="" />
        
        <div className="product-details-wrapper">
        <div className="product-details">
            <p className="product-name">{product.name}</p>
            <p className="product-price">₹ {product.price}</p>
            <AiFillStar className='star-icon' /> <span className='rating'>{product.rating}</span>
        </div>
            <BsCart  className='product-cart'/>
        </div>
      </div>
  })
  useEffect(() => {
    Aos.init()
  },[])


  return (
    <div className='product-main-container'>
      <div className="img-swapping-container">
        <img src={backgroundData[count]} alt="" className='home-background-img'/>
        <div className="img-swapping-btn-container">
          <AiFillLeftCircle 
          className='image-swapping-icon'
          onClick={swappingImgLeft}
          />
          <AiFillRightCircle 
          className='image-swapping-icon'
          onClick={swappingImgRight}
          />
        </div>
      </div>
      <h1>All Products</h1>
      {renderProduct}
    </div>
  )
}

export default Products
