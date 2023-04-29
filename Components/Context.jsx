import React, { createContext, useState } from 'react'
import data from '../data'
const Context = createContext()

const ContextProvider = (props) => {
    const [allProduct, setAllProduct] = useState(data)
    
  return (
    <>
    <Context.Provider value={
        {allProduct: allProduct}}>
        {props.children}
    </Context.Provider>
    </>
  )
}

export {ContextProvider, Context}
