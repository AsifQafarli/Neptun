import React from 'react'
import { useParams } from 'react-router-dom'
import { product_list } from '../../assets/assets'
import './SingleProduct.css'
import { LuFacebook } from 'react-icons/lu'
import { FaXTwitter } from 'react-icons/fa6'
import ProductSlider from '../Components/ProductSlider'



function SingleProduct() {


    const { id } = useParams()

    let product = product_list.find(item => item._id === id)
    console.log(product);

    return (
        <div className='product-page-container'>
            <div className='product-details-wrapper'>
                <div className='product-image-section'>
                    <ProductSlider images={[product.product_img1, product.product_img2]} />
                </div>

                <div className='product-info-section'>
                    <h2>{product.name}</h2>
                    <p className='product-price'>{product.price}</p>
                    <form className='product-options-form'>
                            <label htmlFor="">Size</label>
                        <select className='product-size-select'>
                            <option value="">Select An Option</option>
                            {product?.options?.map((option, i) => {
                                return <option key={i} value="">{option}</option>
                            })}
                        </select>

                        <label className='quantity-label' htmlFor="">Quantity</label>
                        <input className='quantity-input' type="number" />
                    </form>
                    <button className='add-to-cart-button'>Add to cart</button>
                    <div className='social-share-icons'>
                        <label htmlFor="">Share:</label>
                        <LuFacebook />
                        <FaXTwitter />
                    </div>
                    <h5>Description</h5>
                    <p className='product-description'>This is a great place for you to add a short description about your product. Click the Store icon and click the "Manage Product" button to customize your product description.</p>
                </div>
            </div>
        </div>

    )
}

export default SingleProduct