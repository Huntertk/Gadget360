import React, { useContext, useState } from 'react'
import { BsCartFill, BsCart,BsTextRight,BsXLg } from "react-icons/bs";
import logo from '../src/assets/images/logo.png'
import {NavLink} from 'react-router-dom'
import { Context } from './Context';

import './header.css'

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const context = useContext(Context)

    const toggleNav = () => {
        setNavOpen((prev) => {
            return prev ? false : true
        })
    }

    const activeStyle = {
        backgroundColor: '#f5f5f5',
        color: '#2C3333',
        padding: '0.5rem 0.3rem',
        borderRadius: '8px',
        textAlign: 'center'
    }

  return (
    <div className='header-container'>
        <NavLink to='/'>
            <img src={logo} alt="logo" className='header-logo' />
        </NavLink>
        <div className="icon-container">
            <NavLink to='cart' onClick={() => {setNavOpen(false)}}>
                {context.cartItems.length > 0 ? <BsCartFill className='cart-icon' /> : <BsCart className='cart-icon' />}
            </NavLink>
            {
                navOpen ? <BsXLg className='cart-icon' 
                onClick={() => {toggleNav()}} /> :
                <BsTextRight className='cart-icon' 
                onClick={() => {toggleNav()}} />
            }
        </div>

        <div className={`nav-links-container rotate-center ${navOpen ? 'nav-open' : 'nav-close'}`}>
            <span className='nav-links'>Smart Watch</span>
            <span className='nav-links'>True Wireless</span>

            <NavLink to='products' 
            onClick={() => {setNavOpen(false)}}
            className={`nav-links`}
            style={({isActive}) => {return isActive ? activeStyle : null}}
            >
            
            <span >Products</span>
            </NavLink>
            <span className='nav-links'>About Us</span>
        </div>
    </div>
  )
}

export default Header
