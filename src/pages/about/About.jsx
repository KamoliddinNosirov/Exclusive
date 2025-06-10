import React from 'react'
import "./About.scss"
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";

function About() {
  return (
    <>
      <div onLoad={() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }} className="hero hero2" data-aos-duration="2000" data-aos="fade-up">
        <div className="container">
          <p className='hero-title'>Home / <span>About</span></p>
          <div className="info">
            <h1>Our Story</h1>
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>
        </div>
        <div className="bacround">
          <img src="/imgs/about.png" alt="" />
        </div>
      </div>
      <main>
        <section className='bolim-section'>
          <div className="container">
            <div className="card">
              <img src="/imgs/aboutimg1.png" alt="" />
              <h1>10.5k </h1>
              <p>Sallers active our site</p>
            </div>
            <div className="card">
              <img src="/imgs/Services.png" alt="" />
              <h1>33k</h1>
              <p>Mopnthly Produduct Sale</p>
            </div>
            <div className="card">
              <img src="/imgs/aboutimg2.png" alt="" />
              <h1>45.5k</h1>
              <p>Customer active in our site</p>
            </div>
            <div className="card">
              <img src="/imgs/aboutimg3.png" alt="" />
              <h1>25k</h1>
              <p>Anual gross sale in our site</p>
            </div>
          </div>
        </section>
        <section className="user-info">
          <div className="container">
            <div className="box">
              <img src="/imgs/userimg1.png" alt="" />
              <h2>Tom Cruise</h2>
              <p>Founder & Chairman</p>
              <div className="icons">
                <span><FaInstagram /></span>
                <span><CiTwitter /></span>
                <span><RiLinkedinLine /></span>
              </div>
            </div>
            <div className="box">
              <img src="/imgs/userimg2.png" alt="" />
              <h2>Emma Watson</h2>
              <p>Managing Director</p>
              <div className="icons">
                <span><FaInstagram /></span>
                <span><CiTwitter /></span>
                <span><RiLinkedinLine /></span>
              </div>
            </div>
            <div className="box">
              <img src="/imgs/userimg3.png" alt="" />
              <h2>Will Smith</h2>
              <p>Product Designer</p>
              <div className="icons">
                <span><FaInstagram /></span>
                <span><CiTwitter /></span>
                <span><RiLinkedinLine /></span>
              </div>
            </div>
            <div className="dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </section>
        <section className="cardds">
          <div className="container">
            <div className="cards">
              <div className="card">
                <img src="/imgs/car.png" alt="" />
                <h4>FREE AND FAST DELIVERY</h4>
                <p>Free delivery for all orders over $140</p>
              </div>
              <div className="card">
                <img src="/imgs/Services.png" alt="" />
                <h4>24/7 CUSTOMER SERVICE</h4>
                <p>Friendly 24/7 customer support</p>
              </div>
              <div className="card">
                <img src="/imgs/Services (1).png" alt="" />
                <h4>MONEY BACK GUARANTEE</h4>
                <p>We reurn money within 30 days</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About