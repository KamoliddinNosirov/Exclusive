import React, { useEffect, useState } from 'react'
import "./SingUp.scss"
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { setToken } from '../../services/services';


function SingUp({ getUser, likIsCount }) {

  const [first_name, setFirstName] = useState(null)
  const [emailORphone, setemailORphone] = useState(null)
  const [password, setPassword] = useState(null)
  const navigate = useNavigate()

  const signUp = (e) => {
    e.preventDefault()
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      first_name: first_name,
      email_or_phone: emailORphone,
      password
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://ecommercev01.pythonanywhere.com/user/register/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.email_or_phone) {
          toast.error(result.email_or_phone[0])
        } else if (result.password) {
          toast.error(result.password[0])
        } else if (result.message) {
          getUser()
          login()
        }
      })
      .catch((error) => console.error(error));
  }


  const login = () => {
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
        if(result?.access){
          toast.success("Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tkazildi.")
          setToken(result.access)
          navigate("/")
          likIsCount()
          setemailORphone("")
          setPassword("")
          setFirstName("")
          likIsCount()
          getUser()
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
          <form onSubmit={(e) => {
            signUp(e)
          }} className='singUp' action="">
            <h1>Create an account</h1>
            <p>Enter your details below</p>
            <input value={first_name} onChange={(e) => {
              setFirstName(e.target.value)
            }} type="text" placeholder='Name' />
            <input value={emailORphone} onChange={(e) => {
              setemailORphone(e.target.value)
            }} type="email" placeholder='Email or Phone Number' />
            <input value={password} onChange={(e) => {
              setPassword(e.target.value)
            }} type="text" placeholder='Password' />
            <button className='btn'>Create Account</button>
            <button><span><FcGoogle /></span> Sign up with Google</button>
            <p className='ptag'>Already have account? <a href="/login">Log in</a></p>
          </form>
        </div>
      </section>
    </>
  )
}

export default SingUp