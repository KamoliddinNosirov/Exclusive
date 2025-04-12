import React from 'react'
import "./Modal.css"
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { FaCartPlus, FaChevronRight, FaMinus, FaPlus } from 'react-icons/fa6'

function Modal({ addtoCart, selectedProduct, count, setCount, setopenModaltoCart, SetSelectedSize, SetSelectedColor, openModaltoCart, selectedSize, selectedColor }) {

    return (
        <div className={openModaltoCart ? "modal-to-cart active" : "modal-to-cart"}>
            <div className="container">
                <div onClick={() => {
                    setopenModaltoCart(false)
                    SetSelectedColor("Rang tanlang")
                    SetSelectedSize("O'lcham tanlang")
                    setCount(1)
                }} className="close2"><span><IoIosCloseCircleOutline /></span></div>
                <div className="img-to-cart">
                    <img src={`https://ecommercev01.pythonanywhere.com/${selectedProduct?.pictures[0]?.file}`} alt="" />
                    <Link className='btn-full' to={`/OneProduct/${selectedProduct?.id}`} onClick={() => {
                        setopenModaltoCart(false)
                    }} ><button>Mahsulot haqidagi bor malumot <span><FaChevronRight /></span></button></Link>
                </div>
                <div className="cart-info">
                    <h2>{selectedProduct?.title?.length > 75 ? selectedProduct?.title?.slice(0, 75) : selectedProduct?.title}</h2>
                    <div className="line"></div>
                    <div className="colors">
                        <p>Color: <span>{selectedColor}</span></p>
                        {
                            selectedProduct?.properties?.color?.map((item, keyid) => {
                                return <div key={keyid} onClick={() => {
                                    SetSelectedColor(item)
                                }} className={selectedColor == item ? "color active" : "color"}
                                    style={{ backgroundColor: item }}></div>
                            })
                        }
                    </div>
                    <div className="sizes">
                        <p style={{ display: selectedProduct?.properties?.size ? 'block' : 'none' }}>Size: <span>{selectedSize}</span></p>
                        {
                            selectedProduct?.properties?.size?.map((item, keyid) => {
                                return <div key={keyid} onClick={() => {
                                    SetSelectedSize(item)
                                }} className={selectedSize == item ? "size active" : "size"} >{item}</div>
                            })
                        }
                    </div>
                    <div className="miqdori">
                        <p className='ptag'>Miqdori:</p>
                        <div className="bolim">
                            <div className="count">
                                <span className='minus' onClick={() => {
                                    setCount(count > 1 ? count - 1 : 1)
                                }}><FaMinus /></span>
                                <p>{count}</p>
                                <span className='plus' onClick={() => {
                                    setCount(count + 1)
                                }}><FaPlus /></span>
                            </div>
                            <div className="prices">
                                <p className='price'>${selectedProduct?.discount_price > 0 ? selectedProduct?.discount_price * count : selectedProduct?.price * count}</p>
                                <p className={selectedProduct?.discount_price <= 0 ? "span active" : "discount-price"}>${selectedProduct?.discount_price <= 0 ? selectedProduct?.discount_price * count : selectedProduct?.price * count}</p>
                            </div></div>
                        <button onClick={() => {
                            addtoCart(selectedProduct?.id)
                        }} className="add-cart">Add to cart <span><FaCartPlus /></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal