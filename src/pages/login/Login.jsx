import React, { useState } from 'react'
import "./Login.scss"
import { FcGoogle } from "react-icons/fc";
import { setToken } from '../../services/services';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login({getUser, likIsCount, cartDate}) {

  const [emailORphone, setemailORphone] = useState(null)
  const [password, setPassword] = useState(null)

  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email_or_phone: emailORphone,
      password
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://ecommercev01.pythonanywhere.com/user/token/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if(result.access){
          setToken(result.access)
          setemailORphone("")
          setPassword("")
          getUser()
          navigate("/")
          likIsCount()
          cartDate()
          toast.success("siz ro'yhatdan o'tdingiz")
        }else if(result.email_or_phone && result.email_or_phone[0] || 
          result.password && result.password[0]){
          toast.error(result.password[0])
        }else if(result.non_field_errors){
          toast.error(result.non_field_errors[0])
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <section onLoad={() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }} className='singUp-section' data-aos="fade-up" data-aos-duration="2000">
        <div className="bacround"></div>
        <div className="container">
          <form onSubmit={login} className="singUp">
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>
            <input value={emailORphone} onChange={(e)=>{
              setemailORphone(e.target.value)
            }} type="text" placeholder='Email or Phone Number' />
            <input value={password} onChange={(e)=>{
              setPassword(e.target.value)
            }} type="text" placeholder='Password' />
            <div className="buttons">
              <button className='btn'>Log In</button>
              <p className='ptaag'>Forget Password?</p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login