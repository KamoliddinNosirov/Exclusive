import React, { useEffect, useState } from 'react'
import "./Cart.css"
import { getToken } from '../../services/services';
import Cartbox from '../../components/cartcompnents/Cartbox';


function Cart({cartDate, deleteToCart, getSelectedInfo, inCarts, setopenModaltoCart}) {


  return (
    <div onLoad={() => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      })
  }} className='cart' data-aos-duration="2000" data-aos="fade-up">
      <div className="container">
        <p className="from">
          <span>Account</span> <span>/</span> Crat
        </p>
        <div className="boxses">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        <div className="block">
          {inCarts?.cart_items?.length != 0 ? inCarts?.cart_items?.map((item, keyid) => {
            cartDate()
            return <Cartbox cartDate={cartDate} deleteToCart={deleteToCart} getSelectedInfo={getSelectedInfo} setopenModaltoCart={setopenModaltoCart} key={keyid} item={item} />
          }) : <h1 style={{width: "100%", textAlign: 'center'}}>Savatda maxsulot mavjud emas!</h1> } 
        </div>
        <div className="buttons">
          <button>Return To Shop</button>
          <button>Update Cart</button>
        </div>
        <div className="bolim">
          <div className="apply">
            <input type="text" placeholder='Coupon Code' />
            <button>Apply Coupon</button>
          </div>
          <div className="cart-total">
            <h3>Cart Total</h3>
            <div className="total">
              <p>Subtotal:</p>
              <span>$ {inCarts?.total_price}</span>
            </div>
            <div className="total">
              <p>Shipping:</p>
              <span>Free</span>
            </div>
            <div className="total total2">
              <p>Total:</p>
              <span>$ {inCarts?.total_price}</span>
            </div>
            <button>Procees to checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart