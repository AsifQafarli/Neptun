import React, { useState } from 'react'
import "./index.css"
import Home from "./Routes/Home"
import Shop from "./Routes/Shop"
import About from "./Routes/About"
import Contact from "./Routes/Contact"
import LogIn from "./Routes/LogIn"
import SignIn from "./Routes/SignIn"

import { Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar'
// import ProductTitle from './Components/productTitle'
import Frim from './Components/frim'
import Footer from './Components/Footer'
import Filter from './Components/Filter'
import Basket from './Components/Basket'
import Burger from './Components/Burger'
import SingleProduct from './Routes/SingleProduct'


const App = () => {

  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const [isOpenBasket, setIsOpenBasket] = useState(false)
  const [isOpenBurger, setIsOpenBurger] = useState(false)
  

  return (
    <>
      <Navbar setIsOpenBasket={setIsOpenBasket} setIsOpenBurger={setIsOpenBasket} />
      <Filter setIsOpenFilter={setIsOpenFilter} isOpenFilter={isOpenFilter} />
      <Basket setIsOpenBasket={setIsOpenBasket} isOpenBasket={isOpenBasket} />
      <Burger setIsOpenBurger={setIsOpenBurger} isOpenBurger={isOpenBurger} />
      <Routes>
        <Route path="/" element={<Home setIsOpenFilter={setIsOpenFilter} />} />
        <Route path="/shop" element={<Shop setIsOpenFilter={setIsOpenFilter} />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
