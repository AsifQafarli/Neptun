import React, { useRef } from 'react'
import './ProductModal.css'
import Modal from 'react-modal';
import { LuFacebook } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import ProductSlider from './ProductSlider';

Modal.setAppElement('#root');

const ProductModal = ({ product, setIsOpenModal }) => {
    const prdctModal = useRef(null)
    function closeProductModal(e) {
        if (e.target === prdctModal.current) {
            setIsOpenModal(false)
        }
    }

    return (
        <div className='modal-container' ref={prdctModal} onClick={closeProductModal}>

            <div className='modal'>
                <button className='close-button' onClick={() => setIsOpenModal(false)}>X</button>
                <div className='modal-slider-parent'>
                    <ProductSlider images={[product.product_img1, product.product_img2]} />
                </div>

                <div className='product-modal-form'>
                    <h2> {product.name}</h2>
                    <p>${product.price}.00</p>
                    <form action="">
                        <select name="" id="">
                            <option value="" >Select An Option</option>
                            {product?.options?.map(option => {
                                return <option value="">{option}</option>
                            })}

                        </select>
                        <label htmlFor="">Quantity</label>
                        <input type="number" />
                        <button >Add to cart</button>
                    </form>
                    <div className='produc-modal-icon'>
                        <LuFacebook />
                        <FaXTwitter />
                    </div>

                    <h5>Description</h5>
                    <p>This is a great place for you to add a short description about your product. Click the Store icon and click the "Manage Product" button to customize your product description.</p>
                </div>
            </div>
        </div>
    )
}


export default ProductModal
