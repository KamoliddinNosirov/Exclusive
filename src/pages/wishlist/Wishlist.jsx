import React, { useEffect, useState } from 'react'
import Product from '../../components/product/Product'
import "./Wishlist.scss"
import Productt from '../../components/productt/Productt'
import { getToken } from '../../services/services'

function Wishlist({product2,  likecount}) {
    
    
    return (
        <>
            <section onLoad={() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }} className="wishlist" data-aos-duration="2000" data-aos="fade-up">
                <div className="container">
                    <div className="cart">
                        <h4>Wishlist(<span>4</span>)</h4>
                        <button className='btn-wishlist'>Move All To Bag</button>
                    </div>
                    <div className='block'>
                        {likecount?.length != 0 ?  likecount?.map((item) => {
                            return <Product item={item} />
                        }) : <h1 className='h1tag'>Yoqtirishlar mavjud emas</h1>}
                    </div>
                </div>
            </section>
            <section className='jastForYou' data-aos-duration="2000" data-aos="fade-up">
                <div className="container">
                    <div className="cart">
                        <h4><img src="/public/imgs/sectionimg.png" alt="" />Just For You</h4>
                        <button className='btn-wishlist'>See All</button>
                    </div>
                    <div className="block">
                        {
                            product2?.map((item, keyid)=>{
                                return <Productt key={keyid} item={item}/>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wishlist