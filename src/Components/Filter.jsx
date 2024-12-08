import React, { useRef, useState } from 'react';
import './Filter.css';

const Filter = ({ setIsOpenFilter, isOpenFilter, product_list, setFilteredProducts }) => {

  const filterModal = useRef(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 22, max: 250 });

  function closeFilterModal(e) {
    if (e.target === filterModal.current) {
      setIsOpenFilter(false);
    }
  }


  function handleCategoryChange(event) {
    const { id, checked } = event.target;
    setSelectedCategories(prevCategories => {
      if (checked) {
        return [...prevCategories, id];
      } else {
        return prevCategories.filter(category => category !== id);
      }
    });
  }

  function handlePriceChange(event) {
    const { id, value } = event.target.value;
    setPriceRange(prevRange => ({
      ...prevRange,
      [id]: value
    }));
  }

  function applyFilters() {
    const filteredProducts = product_list.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
      return matchesSearch && matchesCategory && matchesPrice;
    });

    setFilteredProducts(filteredProducts);

    console.log(filteredProducts);
  }

  return (
    <div className='filter-modal' style={{ width: isOpenFilter ? "100%" : 0 }} ref={filterModal} onClick={closeFilterModal}>
      <div className='filter-search' style={{ width: isOpenFilter ? "45%" : 0 }}>
        <h5 className="filter-title">Search and Filter</h5>
        <button className='search-close-button' onClick={() => setIsOpenFilter(false)}>X</button>

        <div className="filter-group">
          <label htmlFor="search" className="filter-label">Search:</label>
          <input
            type="text"
            id="search"
            className="filter-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <label className="filter-label">Collections:</label>
        <div className="filter-group">
          {/* Checkbox'lar */}
          {['short jacket', 'sweatshirt', 't-shirt', 'suit', 'coat', 'jacket', 'field jacket', 'shirt', 'turtleneck', 'cardigan', 'loafers', 'sneakers', 'jeans', 'chinos'].map(category => (
            <div className="form-check" key={category}>
              <input
                type="checkbox"
                id={category}
                className="form-checkbox"
                checked={selectedCategories.includes(category)}
                onChange={handleCategoryChange}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>

        <div className='price-filter'>
          <label htmlFor="min-price" className="filter-label">Price ($):</label>
          <input
            type="number"
            id="min-price"
            className="price-input"
            placeholder=""
            defaultValue={priceRange.min}
            onChange={handlePriceChange}
          />
          <input
            type="number"
            id="max-price"
            className="price-input"
            placeholder="250"
            defaultValue={priceRange.max}
            onChange={handlePriceChange}
          />
          <div className="filter-buttons">
            <button className="clear-button" onClick={() => {
              setSearchQuery("");
              setSelectedCategories([]);
              setPriceRange({ min: 22, max: 250 });
            }}>Clear Filter</button>
            <button className="apply-button" onClick={applyFilters}>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
