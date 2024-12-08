import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import './Home.css'
import { product_list } from '../../assets/assets'
import ProductModal from '../Components/ProductModal'
import ProductTitle from '../Components/productTitle'
import Products from '../Components/Products'
import Frim from '../Components/frim'

const Home = ({ setIsOpenFilter }) => {

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [modalData, setModalData] = useState({})

  const addToCard = (product) => {
    setIsOpenModal(true)
    setModalData(product)
  }

  return (
    <><div className='home-page'>
      <div className='text-center'>
        <h2>Featured</h2>
      </div>
      <Products setIsOpenFilter={setIsOpenFilter} />
      <Frim />
    </div>

    </>

  )
}

export default Home
