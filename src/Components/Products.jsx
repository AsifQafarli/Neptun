import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { FaRegStar } from "react-icons/fa";

import "./Products.css";
import { product_list } from "../../assets/assets";
import ProductModal from "../Components/ProductModal";
import ProductTitle from "../Components/productTitle";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Products = ({ setIsOpenFilter, filter }) => {
  const [filteredProducts, setFilteredProducts] = useState(product_list);
  const [selectedFilter, setSelectedFilter] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [paginationBtn, setPaginationBtn] = useState([]);
  const [direction, setDirection] = useState({
    start: 0,
    end: 9,
  });

  console.log(product_list);

  useEffect(() => {
    for (let i = 0; i < product_list.length / 9; i++) {
      paginationBtn.push(
        <button
          key={i}
          className="pagination-button"
          onClick={() => getPagination(i + 1)}
        >
          {i + 1}
        </button>
      );
    }
    setPaginationBtn([...paginationBtn]);
  }, []);
  const addToCard = (product) => {
    setIsOpenModal(true);
    setModalData(product);
  };

  const getPagination = (index) => {
    let end = index * 9;
    let start = end - 9;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setDirection({
      start,
      end,
    });
  };

  useEffect(() => {
    console.log(filter, "filter in product component");
    let copyProduct = [...product_list];

    copyProduct = copyProduct.filter(
      (product) =>
        product.price >= filter.priceRange.min &&
        product.price <= filter.priceRange.max
    );

    if (filter.categories.length > 0) {
      copyProduct = copyProduct.filter((product) =>
        filter.categories.includes(product.category)
      );
    }

    if (filter.search) {
      copyProduct = copyProduct.filter((product) =>
        product.name.includes(filter.search)
      );
      console.log(copyProduct, "copy product in search");
    }

    if (selectedFilter == "recently") {
      setFilteredProducts(copyProduct.reverse());
    } else if (selectedFilter == "low-high") {
      setFilteredProducts(copyProduct.sort((a, b) => a.price - b.price));
    } else if (selectedFilter == "high-low") {
      setFilteredProducts(copyProduct.sort((a, b) => b.price - a.price));
    } else if (selectedFilter == "a-z") {
      setFilteredProducts(
        copyProduct.sort((a, b) => a.name.localeCompare(b.name))
      );
    } else if (selectedFilter == "z-a") {
      setFilteredProducts(
        copyProduct.sort((a, b) => b.name.localeCompare(a.name))
      );
    } else {
      setFilteredProducts(copyProduct);
    }
  }, [selectedFilter, filter]);

  return (
    <>
      <ProductTitle
        setIsOpenFilter={setIsOpenFilter}
        setSelectedFilter={setSelectedFilter}
      />

      <div className="home-menu" id="home-menu">
        <div className="home-menu-list">
          {filteredProducts.map((item, index) => {
            if (index >= direction.start && index < direction.end) {
              return (
                <div key={index} className="home-menu-list-item">
                  <Link to={`/product/${item._id}`}>
                    <img src={item.product_img1} alt="" />
                  </Link>
                  <div className="home-menu-title">
                    <p className="product-name"> {item.name}</p>
                    <p className="product-price"> ${item.price.toFixed(2)}</p>
                    <section className="cart-reviews">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </section>

                    <button onClick={() => addToCard(item)}>Add To Cart</button>
                  </div>
                </div>
              );
            }
          })}
        </div>
        {isOpenModal && (
          <ProductModal product={modalData} setIsOpenModal={setIsOpenModal} />
        )}
      </div>
      <div className="pagination-container">{paginationBtn}</div>
    </>
  );
};

export default Products;
