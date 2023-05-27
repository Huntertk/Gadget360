import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Products from '../Pages/Products'
import Cart from '../Pages/Cart'
import Layout from './Layout'
import Home from '../Pages/Home'
import { AnimatePresence } from 'framer-motion' 

const AnimatedRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
