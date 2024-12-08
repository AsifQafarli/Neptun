import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { RiShoppingCart2Line, } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from 'react';

const Navbar = ({ setIsOpenBasket, setIsOpenBurger }) => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [scrollY, setScrollY] = useState(false);
    const headerElem = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 160) {
                headerElem.current.style.height = "4.0vw"
                headerElem.current.style.paddingBlock = "0"
            } else {
                headerElem.current.style.height = "6vw"
                headerElem.current.style.paddingBlock = "1rem"
            }

        })

    }, [window.scrollY])
    function openBurgerModal() {
        setIsOpenBurger(true)
    }

    function openBasketModal() {
        setIsOpenBasket(true)
    }

    return (
        <div className='header' ref={headerElem}>
            <Link to="/">
                <p className='first-name'>Neptune</p>
            </Link>
            <div className='navbar-right'>
                <ul className="nav-menu">
                    <li  >
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li  >
                        <NavLink to="/Shop">Shop</NavLink>
                    </li>
                    <li  >
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li >
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                    <li >
                        <NavLink to="/Login">Log In</NavLink>
                    </li>
                    <li >
                        <NavLink to="/Signin">Sign In</NavLink>
                    </li>
                </ul>

                <div className='navbar-icons-desktop'>
                    <RiShoppingCart2Line onClick={openBasketModal} />
                    <div className='dot'></div>
                </div>

            </div>

            <div className='hamburgers' onClick={handleClick}>
                <div className='navbar-icons'>
                    <RiShoppingCart2Line onClick={openBasketModal} />
                </div>
                {click ? (<AiOutlineClose />) : (<GiHamburgerMenu onClick={openBurgerModal} />)}
            </div>
        </div>
    )
}

export default Navbar
