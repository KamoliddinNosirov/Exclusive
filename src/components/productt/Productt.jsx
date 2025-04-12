import React from 'react'
import { FaRegEye, FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Productt({item}) {


    return (
        <>
            <div className="bosk">
                <div className="bosk-img">
                    <Link to={`/OneProduct/${item.id}`}><img src={`${item.img}`} alt="" /></Link>
                    <button className='btn'>Add To Cart</button>
                    {/* <span className={item.discount == 0 ? "no" : "discount"}>{item.discount}%</span> */}
                    <span className="discount">-35%</span>
                    <span className="heart"><FaRegHeart /></span>
                    <span className="eye"><FaRegEye /></span>
                </div>
                <div className="info">
                    <h4>{item.title.slice(0, 25) + "..."}</h4>
                    <div className="price">
                        <p>${item.discount_price > 0 ? item.discount_price : item.price}</p>
                        <span className={item.discount_price <= 0 ? "span active" : "span"}>${item.discount_price <= 0 ? item.discount_price : item.price}</span>
                    </div>
                    <div className="stars">
                        <img src={item.stars[0].star ? "/public/imgs/star.svg" : "/public/imgs/start.svg"} alt="" />
                        <img src={item.stars[1].star ? "/public/imgs/star.svg" : "/public/imgs/start.svg"} alt="" />
                        <img src={item.stars[2].star ? "/public/imgs/star.svg" : "/public/imgs/start.svg"} alt="" />
                        <img src={item.stars[3].star ? "/public/imgs/star.svg" : "/public/imgs/start.svg"} alt="" />
                        <img src={item.stars[4].star ? "/public/imgs/star.svg" : "/public/imgs/start.svg"} alt="" />
                        <p>({item.stars[5].ball})</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productt