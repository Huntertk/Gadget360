import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from '../Pages/Home'
import Layout from '../Components/Layout'
import './App.css'
import Cart from '../Pages/Cart'
import Products from '../Pages/Products'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
