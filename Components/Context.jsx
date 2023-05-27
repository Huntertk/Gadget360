import React, { createContext, useState } from 'react'
import data from '../data'

const Context = createContext()

const ContextProvider = (props) => {
    const [allProduct, setAllProduct] = useState(data)
    const [cartItems, setCartItems] = useState([])
    
    const addItemToCart = (newItem) => {
        setCartItems((prev) => {
            return [...prev, newItem]
        })
    }
    console.log(cartItems)


    const removeCart = (id) => {
        setCartItems((prev) => {
            return prev.filter((item) => {
                return item.id !== id
            })
        })
    } 
  return (
    <>
    <Context.Provider value={
        {allProduct: allProduct,
        addItemToCart: addItemToCart,
        cartItems: cartItems,
        removeCart: removeCart
        }}>
        {props.children}
    </Context.Provider>
    </>
  )
}

export {ContextProvider, Context}
