import React from 'react'
import { FaRegEye, FaRegHeart } from "react-icons/fa6";

function Product2({item}) {
    return (
        <>
            <div className="bosk">
                <div className="bosk-img">
                    <img src={item?.img} alt="" />
                    <button className='btn'>Add To Cart</button>
                    <span className={item?.discount == 0 ? "no" : "discount"}>{item.discount}%</span>
                    <span className={item.new && item.discount == 0 ? "new" : "new active"}>new</span>
                    <span className="heart"><FaRegHeart /></span>
                    <span className="eye"><FaRegEye /></span>
                </div>
                <div className="info">
                    <h4>{item.title}</h4>
                    <div className="price">
                        <p>${item.discount_price > 0 ? item.discount_price : item.price}</p>
                        <div className="stars">
                            <img src={item.stars[0].star ? "/public/imgs/star.svg" : "/public/imgs/start.svg"} alt="" />
                            <img src={item.stars[1].star ? "/public/imgs/star.svg" : "/public/imgs/start.svg"} alt="" />
                            <img src={item.stars[2].star ? "/public/imgs/star.svg" : "/public/imgs/start.svg"} alt="" />
                            <img src={item.stars[3].star ? "/public/imgs/star.svg" : "/public/imgs/start.svg"} alt="" />
                            <img src={item.stars[4].star ? "/public/imgs/star.svg" : "/public/imgs/start.svg"} alt="" />
                            <p>({item.stars[5].ball})</p>
                        </div>
                    </div>
                    <div className="colors">
                        {
                            item.colors.map((color, keyid)=>{
                                return (<div key={keyid} className="color" style={{backgroundColor: `${color}`}}></div>)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product2