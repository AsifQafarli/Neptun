import React, { useState } from 'react';
import './ProductTitle.css';
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const ProductTitle = ({ setIsOpenFilter, setSelectedFilter }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='product-title'>
            <div className='product'>
                <div>
                    <p onClick={() => navigate('/shop')} className="clickable">Shop</p>
                    <p>/ Featured - Showing 1-6 of 8 results</p>
                </div>

                <div className='product-search'>
                    <div className='search-container' onClick={() => setIsOpenFilter(true)}>
                        <IoIosSearch className='search-icon' />
                        <input type="text" placeholder='Search and Filter' />
                    </div>

                    <select onChange={(e) => { setSelectedFilter(e.target.value) }} className='sort-container' name="" id="">
                        <option value="" selected={true} disabled >Sort By</option>
                        <option value={"recently"}>Recently Added</option>
                        <option value={"low-high"}>Price Low-High</option>
                        <option value={"high-low"}>Price High-Low</option>
                        <option value={"a-z"}>Name A-Z</option>
                        <option value={"z-a"}>Name Z-A</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ProductTitle;
