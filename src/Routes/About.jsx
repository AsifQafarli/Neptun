import React from 'react'
import { about_img } from '../../assets/assets'
import './About.css'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
      <div className='about-title'>
        <div>
          <img className='meeting-img' src={about_img} alt="" />
        </div>
        <div className='information'>
          <h2>About Neptune</h2>
          <h5>Your #1 Online Retailer since 2015</h5>

          <p>
            This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours.</p>


          <p>   This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours.</p>
       

          <p>
            This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours.</p>

        </div>
      </div>
      <div className='about-button'>
        <Link to={"/shop"} className='shop-now'>Shop Now</Link>
        <Link to={"/contact"} className='contact-us'>Contact Us</Link>
      </div>
    </>
  )
}

export default About
