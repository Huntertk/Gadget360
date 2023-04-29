import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { BsCart } from "react-icons/bs";
import { AiFillLeftCircle, AiFillRightCircle,AiFillStar,AiFillCheckCircle } from "react-icons/ai";
import { TbTruckReturn,TbTruck } from "react-icons/tb";
import img from '../src/assets/images/background.webp'
import img1 from '../src/assets/images/background1.webp'
import img2 from '../src/assets/images/background2.webp'
import barImg from '../src/assets/images/home-tab-deal-bar.png'
import './home.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
  const [count, setCount] = useState(0)
  const backgroundData = [
    img,
    img1,
    img2
  ]

  const featureProductData = [
    {
      id: uuidv4(),
      img:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_131.jpg?v=1682408981',
      name: 'Airdopes 131',
      price: 999,
      rating: 4.8
    },
    {
      id: uuidv4(),
      img:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Storm_Call.jpg?v=1682408982',
      name: 'Strom Call',
      price: 1999,
      rating: 4.7
    },
    {
      id: uuidv4(),
      img:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Armour.jpg?v=1682408981',
      name: 'Armour',
      price: 2299,
      rating: 'Be first to review'
    }
  ]

  const renderFeatureProduct = featureProductData.map((product) => {
    return <div key={product.id} className="feature-product-container"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
          <img src={product.img} alt="" className='feature-product-img'/>
        
          <div className="feature-product-details">
            <div className="feature-product-wrapper">
              <p className="feature-product-name">{product.name}</p>
              <p className="feature-product-price">₹ {product.price}</p>
              <AiFillStar className='star-icon' /> <span className='rating'>{product.rating}</span>
            </div>
            <div className="button-wrapper">
              <BsCart className='product-cart-icon' />
            </div>
          </div>
        </div>
  })

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

  useEffect(() => {
    Aos.init()
  },[])

  return (
    <div className='home-container ' >
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

      <div className="feature-product-container" 
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
        <div className="feature-display-bar-container">
          <img src={barImg} alt="bar-img" className='bar-img' />
          <h1 className="absolute-heading-bar">The Summer Sale 60% off</h1>
        </div>
        <h1>Feature Product</h1>
        <div className="underline"></div>
        
        {renderFeatureProduct}

        <div className="company-feature" 
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        >
          <div className='company-feature-icon-wrapper'>
            <AiFillCheckCircle className='company-feature-icon' /> 
            <span>1 Year Warranty</span>
          </div>
          <div className='company-feature-icon-wrapper'>
            <TbTruckReturn className='company-feature-icon' />
            <span>7 day return</span>
          </div>
          <div className='company-feature-icon-wrapper'>
            <TbTruck  className='company-feature-icon'/>
            <span>Free Shipping</span>
          </div>
        </div>
    
      </div>
      
    </div>
  )
}

export default Home
