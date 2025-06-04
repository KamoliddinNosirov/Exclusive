import React, { useState } from 'react'
import { FaHeart, FaRegEye, FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { getToken } from '../../services/services';
import Stars from '../stars/Stars';
import { IoMdCart } from 'react-icons/io';
import { IoTrash } from 'react-icons/io5';
import { useEffect } from 'react';


function Product({ likIsCount, getSelectedInfo, item, getDate }) {

    const [is_like, set_isLiked] = useState(item?.is_liked)


    const isLike = (id) => {
        if (is_like == true) {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${getToken()}`);

            const requestOptions = {
                method: "DELETE",
                headers: myHeaders,
                redirect: "follow"
            };

            fetch(`https://ecommercev01.pythonanywhere.com/action/remove-from-wishlist/?product_id=${id}`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    console.log(result)
                    getDate()
                    likIsCount()
                })
                .catch((error) => console.error(error));
        } else {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${getToken()}`);

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                redirect: "follow"
            };

            fetch(`https://ecommercev01.pythonanywhere.com/action/add-to-wishlist/?product_id=${id}`, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                    getDate()
                    likIsCount()
                })
                .catch((error) => console.error(error));
        }
    }


    return (
        <>
            {
                <div className="bosk">
                    <div className="bosk-img">
                        <Link to={`/OneProduct/${item.id}`}> <img src={`https://ecommercev01.pythonanywhere.com/${item.pictures[0]}`} alt="" /> </Link>
                        <button onClick={() => {
                            getSelectedInfo(item.id)
                        }}
                            className='btn-to-cart'>Add to cart</button>
                        <span className={item.discount_percent == null ? "discount_no" : "discount"}>{item.discount_percent}%</span>
                        <span onClick={() => {
                            isLike(item.id)
                            set_isLiked(!is_like)
                        }} className="heart">{is_like ? <FaHeart /> : <FaRegHeart />}</span>
                        <span className="eye"><FaRegEye /></span>
                    </div>
                    <div className="info">
                        <h4>{item.title.slice(0, 25) + "..."}</h4>
                        <div className="price">
                            <p>${item.discount_price > 0 ? item.discount_price : item.price}</p>
                            <span className={item.discount_price <= 0 ? "span active" : "span"}>${item.discount_price <= 0 ? item.discount_price : item.price}</span>
                        </div>
                        <div className="stars">
                            <Stars star={item.stars} />
                        </div>

                    </div>
                </div >
            }

        </>
    )
}

export default Product