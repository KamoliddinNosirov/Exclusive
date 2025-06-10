import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper_hero.scss'


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa6';

export default function Swiper_hero({product}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className={product ? "mySwiper" : "mySwiper noactive"}
      >
        <SwiperSlide className='swiper-slider'>
          <div className="bolim">
            <div className="info">
              <div className="phone">
                <img src="/imgs/Appl.svg" alt="" />
                <p>iPhone 14 Series</p>
              </div>
              <h1>Up to 5% off Voucher</h1>
              <button>
                <a href="">Shop Now</a>
                <span><FaArrowRight /></span>
              </button>
            </div>
            <div className="img-hero">
              <img src="/public/imgs/phone.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slider'>
          <div className="bolim">
            <div className="info">
              <div className="phone">
                <img src="/imgs/Appl.svg" alt="" />
                <p>iPhone 15 Series</p>
              </div>
              <h1>Up to 10% off Voucher</h1>
              <button>
                <a href="">Shop Now</a>
                <span><FaArrowRight /></span>
              </button>
            </div>
            <div className="img-hero">
              <img src="/public/imgs/hero-15iphone.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slider'>
          <div className="bolim">
            <div className="info">
              <div className="phone">
                <img src="/imgs/Appl.svg" alt="" />
                <p>iPhone 16 Series</p>
              </div>
              <h1>Up to 15% off Voucher</h1>
              <button>
                <a href="">Shop Now</a>
                <span><FaArrowRight /></span>
              </button>
            </div>
            <div className="img-hero">
              <img src="/public/imgs/16.webp" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
