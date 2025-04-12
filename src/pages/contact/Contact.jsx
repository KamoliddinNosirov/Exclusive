import React from 'react'
import "./Contact.scss"
import { MdOutlinePhone } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <div onLoad={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }} className="hero hero3" data-aos="fade-up" data-aos-duration="2000">
        <div className="container">
          <p style={{color: "gray", fontSize: "14px"}} className='hero-title'>Home / <span style={{color: 'black', fontSize: "14px"}}>Cantact</span></p>
          <div className="block">
            <div className="boxs">
              <div className="box">
                <h2><span><MdOutlinePhone /></span>Call To Us</h2>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
              </div>
              <div className="line"></div>
              <div className="box">
                <h2><span><FaRegComment /></span>Write To US</h2>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </div>
            </div>
            <div className="cards">
              <div className="input-block">
                <input type="text" placeholder='Your Name *' />
                <input type="text" placeholder='Your Email *' />
                <input type="text" placeholder='Your Phone *' />
              </div>
              <textarea name="" id="" cols="71" placeholder='Your Massage' rows="9"></textarea>
              <button>Send Massage</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact