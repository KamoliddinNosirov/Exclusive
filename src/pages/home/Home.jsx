import "./Home.scss"
import { FaAngleRight, FaArrowLeft, FaArrowRight, } from "react-icons/fa6";
import Product from '../../components/product/Product';
import { IoIosPhonePortrait } from "react-icons/io";
import { LuMonitorSmartphone } from "react-icons/lu";
import { TbDeviceWatchStats } from "react-icons/tb";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { GiConsoleController } from "react-icons/gi";
import { useEffect, useState } from "react";
import Swiper_hero from "../../components/swiper/Swiper_hero";

function Home({ getSelectedInfo, product, getDate, isLike, likIsCount }) {


  const [productfilter, setProductfilter] = useState(false)
  const [bestProduct, setbestProduct] = useState(false)
  const [ourProduct, setOurProduct] = useState(false)

  // Bu teskari sanoq uchun vaqt
  const [days, setDays1] = useState(2)
  const [hours, setHours] = useState(10)
  const [minutes, setMinutes] = useState(34)
  const [seconds, setseconds] = useState(12)
  const [remainingTime, setRemainingTime] = useState(
    days * 24 * 60 * 60 * 1000 +
    hours * 60 * 60 * 1000 +
    minutes * 60 * 1000 +
    seconds * 1090
  )

  // Bu sanoq 0 ga yetganda to'xtatish uchun
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1000) {
          clearInterval(timer)
          return 0
        }
        return prev - 1000
      });
    }, 1000);

    return () => clearInterval(timer)

  }, [])


  // Bu har safar vagt yangilanganda o'sha vagtni olish uchun
  useEffect(() => {
    if (remainingTime > 0) {
      setDays1(Math.floor(remainingTime / (24 * 60 * 60 * 1090)));
      setHours(Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)));
      setMinutes(Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000)));
      setseconds(Math.floor((remainingTime % (60 * 1000)) / 1000));
    }
  }, [remainingTime])


  return (

    <>
      <div onLoad={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }} className="hero" data-aos="zoom-in-down" data-aos-duration="2000">
        <div className="container">
          <ul>
            <li><a href="">Phones</a> <span><FaAngleRight /></span> </li>
            <li><a href="">Computers</a>  <span><FaAngleRight /></span></li>
            <li><a href="">SmartWatch</a> <span><FaAngleRight /></span></li>
            <li><a href="">Сamera</a> <span><FaAngleRight /></span></li>
            <li><a href="">HeadPhones</a> <span><FaAngleRight /></span></li>
            <li><a href="">Gaming</a> <span><FaAngleRight /></span></li>
          </ul>
          <Swiper_hero product={product} />
        </div>
      </div>
      <main>
        <section className="flash" data-aos="fade-up" data-aos-duration="2000">
          <div className="container">
            <p className={product ? 'title' : 'title noactive'}><img src="/public/imgs/sectionimg.png" alt="" /><span>Today’s</span></p>
            <div className="bolim">
              <h1 className={product ? "" : "h1noactive"}><h1>Flash Sales</h1></h1>
              <div className="boxs">
                <div className={product ? "box" : "boxnoactive"}>
                  <span>Days</span>
                  <p>{days}</p>
                </div>
                <p className={product ? "dotet" : "dotet noactive"}>:</p>
                <div className={product ? "box" : "boxnoactive"}>
                  <span>Hours</span>
                  <p>{hours}</p>
                </div>
                <p className={product ? "dotet" : "dotet noactive"}>:</p>
                <div className={product ? "box" : "boxnoactive"}>
                  <span>Minutes</span>
                  <p>{minutes}</p>
                </div>
                <p className={product ? "dotet" : "dotet noactive"}>:</p>
                <div className={product ? "box" : "boxnoactive"}>
                  <span>Seconds</span>
                  <p>{seconds}</p>
                </div>
              </div>
              <div className="swipe">
                <span className={product ? "" : "spannoactive"}><FaArrowLeft className="icon"/></span>
                <span className={product ? "" : "spannoactive"}><FaArrowRight className="icon"/></span>
              </div>
            </div>
            <div className="block">
              {
                productfilter ?
                  product ? product?.map((item, keyid) => {
                    return <Product likIsCount={likIsCount} isLike={isLike} getDate={getDate} getSelectedInfo={getSelectedInfo} key={keyid} item={item} />
                  }) : [1, 1, 1, 1, 1, 1, 1, 1].map(() => {
                    return <div className="bosk noactive"></div>
                  }) :
                  product ? product?.slice(0, 8).map((item, keyid) => {
                    return <Product likIsCount={likIsCount} isLike={isLike} getDate={getDate} getSelectedInfo={getSelectedInfo} key={keyid} item={item} />
                  }) : [1, 1, 1, 1, 1, 1, 1, 1].map(() => {
                    return <div className="bosk noactive"></div>
                  })
              }
            </div>
            <button className={product ? 'buttonactive' : "buttonnoactive"} onClick={() => {
              setProductfilter(!productfilter)
            }}>View All Products</button>
          </div>
        </section>
        {
          product &&
          <>
            <section className="browse" data-aos="fade-up" data-aos-duration="2000">
              <div className="container">
                <p className='title'><img src="/public/imgs/sectionimg.png" alt="" />Categories</p>
                <div className="bolim">
                  <h1>Browse By Category</h1>
                  <div className="swipe">
                    <span><FaArrowLeft /></span>
                    <span><FaArrowRight /></span>
                  </div>
                </div>
                <div className="block">
                  <div className="box">
                    <span><IoIosPhonePortrait /></span>
                    <p>Phones</p>
                  </div>
                  <div className="box">
                    <span><LuMonitorSmartphone /></span>
                    <p>Computers</p>
                  </div>
                  <div className="box">
                    <span><TbDeviceWatchStats /></span>
                    <p>SmartWatch</p>
                  </div>
                  <div className="box">
                    <span><MdOutlinePhotoCamera /></span>
                    <p>Camera</p>
                  </div>
                  <div className="box">
                    <span><SlEarphones /></span>
                    <p>HeadPhones</p>
                  </div>
                  <div className="box">
                    <span><GiConsoleController /></span>
                    <p>Gaming</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="best" data-aos="fade-up" data-aos-duration="2000">
              <div className="container">
                <p className='title'><img src="/public/imgs/sectionimg.png" alt="" />This Month</p>
                <div className="bolim">
                  <h1>Best Selling Products</h1>
                  <button onClick={() => {
                    setbestProduct(!bestProduct)
                  }} className='btn'>View All</button>
                </div>
                <div className="block">
                  {
                    bestProduct ?
                      product ? product?.map((item, keyid) => {
                        return <Product likIsCount={likIsCount} isLike={isLike} getDate={getDate} getSelectedInfo={getSelectedInfo} key={keyid} item={item} />
                      }) : [1, 1, 1, 1].map(() => {
                        return <div className="bosk noactive"></div>
                      }) :
                      product ? product?.slice(8, 12).map((item, keyid) => {
                        return <Product likIsCount={likIsCount} isLike={isLike} getDate={getDate} getSelectedInfo={getSelectedInfo} key={keyid} item={item} />
                      }) : [1, 1, 1, 1].map(() => {
                        return <div className="bosk noactive"></div>
                      })
                  }
                </div>
              </div>
            </section>
            <section className="categori" data-aos="fade-up" data-aos-duration="2000">
              <div className="container">
                <div className="info">
                  <p>Categories</p>
                  <h1>Enhance Your Music Experience</h1>
                  <div className="boxs">
                    <div className="box">
                      <p>23</p>
                      <span>Hours</span>
                    </div>
                    <div className="box">
                      <p>05</p>
                      <span>Days</span>
                    </div>
                    <div className="box">
                      <p>59</p>
                      <span>Minutes</span>
                    </div>
                    <div className="box">
                      <p>35</p>
                      <span>Seconds</span>
                    </div>
                  </div>
                  <button>Buy Now!</button>
                </div>
                <div className="img-box">
                  <img src="/public/imgs/Frame 694.png" alt="" />
                </div>
              </div>
            </section>
            <section className="ourProduct" data-aos="fade-up" data-aos-duration="2000">
              <div className="container">
                <p className='title'><img src="/public/imgs/sectionimg.png" alt="" />Our Products</p>
                <div className="bolim">
                  <h1>Explore Our Products</h1>
                  <div className="swipe">
                    <span><FaArrowLeft /></span>
                    <span><FaArrowRight /></span>
                  </div>
                </div>
                <div className="block">
                  {
                    ourProduct ?
                      product ? product?.map((item, keyid) => {
                        return <Product likIsCount={likIsCount} isLike={isLike} getDate={getDate} getSelectedInfo={getSelectedInfo} key={keyid} item={item} />
                      }) : [1, 1, 1, 1, 1, 1, 1, 1].map(() => {
                        return <div className="bosk noactive"></div>
                      }) :
                      product ? product?.slice(12, 20).map((item, keyid) => {
                        return <Product likIsCount={likIsCount} isLike={isLike} getDate={getDate} getSelectedInfo={getSelectedInfo} key={keyid} item={item} />
                      }) : [1, 1, 1, 1, 1, 1, 1, 1].map(() => {
                        return <div className="bosk noactive"></div>
                      })
                  }
                </div>
                <button onClick={() => {
                  setOurProduct(!ourProduct)
                }}>View All Products</button>
              </div>
            </section>
            <section className="newArrival" data-aos="fade-up" data-aos-duration="2000">
              <div className="container">
                <p className='title'><img src="/public/imgs/sectionimg.png" alt="" />Today’s</p>
                <h1>New Arrival</h1>
                <div className="block">
                  <div className="bosk">
                    <h2>PlayStation 5</h2>
                    <p>Black and White version of the PS5 coming out on sale.</p>
                    <a href="">Show Now</a>
                  </div>
                  <div className="bolims">
                    <div className="bolim">
                      <h2>Women’s Collections</h2>
                      <p>Featured woman collections that give you another vibe.</p>
                      <a href="">Show Now</a>
                    </div>
                    <div className="carts">
                      <div className="cart">
                        <h2>Speakers</h2>
                        <p>Amazon wireless speakers</p>
                        <a href="">Show Now</a>
                      </div>
                      <div className="cart cart2">
                        <h2>Perfume</h2>
                        <p>GUCCI INTENSE OUD EDP</p>
                        <a href="">Show Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="card">
                    <img src="/public/imgs/car.png" alt="" />
                    <h4>FREE AND FAST DELIVERY</h4>
                    <p>Free delivery for all orders over $140</p>
                  </div>
                  <div className="card">
                    <img src="/public/imgs/Services.png" alt="" />
                    <h4>24/7 CUSTOMER SERVICE</h4>
                    <p>Friendly 24/7 customer support</p>
                  </div>
                  <div className="card">
                    <img src="/public/imgs/Services (1).png" alt="" />
                    <h4>MONEY BACK GUARANTEE</h4>
                    <p>We reurn money within 30 days</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        }
      </main >
    </>
  )
}

export default Home