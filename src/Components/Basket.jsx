import React, { useRef } from 'react';
import './Basket.css'

const Basket = ({ setIsOpenBasket, isOpenBasket }) => {
  const basketModal = useRef(null)
  function closeBasketModal(e) {
    if (e.target === basketModal.current) {
      setIsOpenBasket(false)
    }
  }

  return (
    <div className='basket-modal' style={{width: isOpenBasket? "100%": 0}} ref={basketModal} onClick={closeBasketModal}>
      <div className='basket-search' style={{width: isOpenBasket? "35%": 0}}>
        <div className='basket-modal-header'>
          <h2>Cart</h2>
          <button className='basket-modal-exit' onClick={() => setIsOpenBasket(false)}>X</button>
        </div>
        <div className="basket-title">
          <p>Your Cart is Empty</p>
          <button className='basket-button'>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
