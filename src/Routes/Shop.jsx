import React from 'react'
import Home from './Home'
import './Shop.css'
import Products from '../Components/Products'
import { shop_img } from '../../assets/assets'



const Shop = ({ setIsOpenFilter }) => {
  return (
    <>
      <div className='shop-title'>
        <img src={shop_img} alt="" />
        <h2>All Products</h2>
      </div>
      <Products setIsOpenFilter={setIsOpenFilter} />
    </>
  )
}

export default Shop
