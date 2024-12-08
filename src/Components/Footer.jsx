import React from 'react'
import './Footer.css'
import { LuFacebook } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <p>Neptune</p>
                    <p>888 Griffiths Way, Mainland ML 12345</p>
                    <p>(987) 654-3210</p>
                    <p>nfo@yoursite.com</p>
                </div>
                <div className="footer-logo">
                    <LuFacebook />
                    <FaXTwitter />
                    <FaInstagram />
                    <p>Copyright 2023 Neptune Store. All Rights Reserved.</p>
                </div>
                <div>
                    <p>W</p>
                    <p>Website Created & Hosted with Website.com Website Builder</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
