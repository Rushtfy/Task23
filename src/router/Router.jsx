import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import Wishlist from '../pages/wishlist/Wishlist'
import SignupForm from '../pages/signUp/SignupForm'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/form' element={<SignupForm/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router