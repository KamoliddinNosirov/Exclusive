import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { FaRegStar, FaRegUser } from 'react-icons/fa6';
import { LuShoppingBag } from 'react-icons/lu';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { TbLogout2 } from 'react-icons/tb';
import { getToken } from '../../services/services';

function Navbar({ likIsCount, cartDate, user, user_info, getUser, inCarts, likecount }) {

  const [modal, setModal] = useState(false)
  const [modalUser, setModalUser] = useState(false)

  const navigate = useNavigate()


  return (
    <>

      <nav>
        <div className="navbar">
          <div className={modalUser ? "modal2 active" : "modal2"}>
            <div className="info">
              <span onClick={() => {
                setModalUser(false)
              }} className='close'><IoIosCloseCircleOutline /></span>
              <h2>First_name:<p>{user_info?.first_name}</p></h2>
              <h2>Last_name:<p>{user_info?.last_name ? user_info?.last_name : "Mavjud emas!"}</p></h2>
              <h2>Email_or_Phone:<p>{user_info?.email_or_phone}</p></h2>
              <h2>Address:<p>{user_info?.user_info ? user_info.address : "Mavjud emas!"}</p></h2>
            </div>
          </div>
          <div className="container">
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="">ShopNow</a></p>
            <select name="" id="">
              <option value="English">English</option>
              <option value="Russion">Russion</option>
              <option value="Uzbekistan">Uzbekistan</option>
            </select>
          </div>
        </div>
        <div className="container">
          <div className="logo">
            <NavLink to={"/"}><img src="../../../public/imgs/logo.png" alt="" /></NavLink>
          </div>
          <ul>
            <li><NavLink className={"navlink"} to={"/"}>Home</NavLink></li>
            <li><NavLink className={"navlink"} to={"/contact"}>Contact</NavLink></li>
            <li><NavLink className={"navlink"} to={"/about"}>About</NavLink></li>
            <li><NavLink className={"navlink"} to={"/singup"}>Sign Up</NavLink></li>
          </ul>
          <div className="bolim">
            <div className="search">
              <input type="text" placeholder='What are you looking for?' />
              <span><IoSearch /></span>
            </div>
            <div className="icons">
              <p onClick={()=>{
                if(getToken()){
                  navigate("/wishlist")
                }else{
                  navigate("/singup")
                }
              }}><span className='like'><FaRegHeart /> {likecount?.length > 0 && <span className="like-countr">{likecount?.length}</span> }</span></p>
              <p onClick={()=>{
                if(getToken()){
                  navigate("/cart")
                }else{
                  navigate("/singup")
                }
              }}><span className='karzina'><IoCartOutline /> {inCarts?.cart_items?.length > 0 && <span className="cart-countr">{inCarts?.cart_items?.length}</span> }</span></p>
              {
                user?.id && <span onClick={() => {
                  setModal(!modal)
                }}><FaRegUser /></span>
              }
            </div>
          </div>
          <div className={modal ? "modal active" : "modal"}>
            <ul>
              <li onClick={() => {
                setModalUser(true)
                setModal(false)
              }}><span><FaRegUser /></span><p>Manage My Account</p></li>
              <li><span><LuShoppingBag /></span><p>My Order</p></li>
              <li><span><IoIosCloseCircleOutline /></span><p>My Cancellations</p></li>
              <li><span><FaRegStar /></span><p>My Reviews</p></li>
              <li onClick={() => {
                localStorage.clear()
                likIsCount()
                cartDate()
                getUser()
                setModal(false)
              }}><span><TbLogout2 /></span><p>Logout</p></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar