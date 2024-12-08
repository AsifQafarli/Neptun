import React, { useRef } from 'react';
import './Burger.css';
import { useNavigate } from 'react-router-dom';

const Burger = ({ setIsOpenBurger, isOpenBurger }) => {
  const burgerModal = useRef(null);
  const burgernavi = useNavigate();

  function closeBurgerModal(e) {
    if (e.target === burgerModal.current) {
      setIsOpenBurger(false);
    }
  }

  return (
    <div
      className='burger-modal'
      style={{ width: isOpenBurger ? '100%' : 0 }}
      ref={burgerModal}
      onClick={closeBurgerModal}
    >
      <div className='burger-search' style={{ width: isOpenBurger ? '100%' : 0 }}>
        <div className='burger-modal-header'>
          <button className='burger-modal-exit' onClick={() => setIsOpenBurger(false)}>
            X
          </button>
        </div>
        <hr className='exit-line' />
        <div className='burger-title'>
          <ul className='burger--nav-menu'>
            <li onClick={() => burgernavi('/home')}>Home</li>
            <hr />
            <li onClick={() => burgernavi('/about')}>About</li>
            <hr />
            <li onClick={() => burgernavi('/shop')}>Shop</li>
            <hr />
            <li onClick={() => burgernavi('/contact')}>Contact</li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Burger;
