import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import SingUp from './pages/singup/SingUp'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Login from './pages/login/Login'
import Cart from './pages/cart/Cart'
import { useEffect } from 'react'
import OneProduct from './components/oneProduct/OneProduct'
import { getToken } from './services/services'
import { ToastContainer, toast } from 'react-toastify';
import Wishlist from './pages/wishlist/Wishlist'
import Modal from './components/modal_components/Modal'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Cartbox from './components/cartcompnents/Cartbox'

function App() {

  const [user, SetUser] = useState(null)
  const [user_info, setUserInfo] = useState(null)
  const [addCart, setAddCart] = useState()
  const [openModaltoCart, setopenModaltoCart] = useState(false)
  const [count, setCount] = useState(1)
  const [selectedSize, SetSelectedSize] = useState("O'lcham tanlang")
  const [selectedColor, SetSelectedColor] = useState("Rang tanlang")
  const [addToCart, setaddToCart] = useState(null)
  const [inCarts, setInCarts] = useState(null)
  const [likecount, setLikeCount] = useState(null)


  const [product, setproduct] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  

  const getUser = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://ecommercev01.pythonanywhere.com/user/detail/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserInfo(result)
        SetUser(result)
      })
      .catch((error) => console.error(error));
  }

  const getDate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken()}`);
    var requestOptions

    if (getToken()) {
      requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };
    } else {
      requestOptions = {
        method: "GET",
        redirect: "follow"
      };
    }


    fetch("https://ecommercev01.pythonanywhere.com/product/list/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setproduct(result)
      })
      .catch((error) => console.error(error));
  }

  const getSelectedInfo = (id) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(`https://ecommercev01.pythonanywhere.com/product/detail/?product_id=${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setSelectedProduct(result)
        setopenModaltoCart(true)
      })
      .catch((error) => console.error(error));
  }

  const cartDate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://ecommercev01.pythonanywhere.com/order/cart-items/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setInCarts(result)
      })
      .catch((error) => console.error(error));
  }

  const addtoCart = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const raw = JSON.stringify({
      "product_id": id,
      "quantity": count,
      "properties": {
        "color": selectedColor ? selectedColor : null,
        "size": selectedSize ? selectedSize : null
      }
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://ecommercev01.pythonanywhere.com/order/add-to-cart/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.message == "Product added to cart successfully.") {
          setaddToCart(result?.cart_item)
          toast.success(result.message);
          SetSelectedColor("Rang tanlang")
          SetSelectedSize("o'lcham tanlang")
          cartDate()
          setCount(1)
          setopenModaltoCart(false)
        } else {
          toast.error("Size va color tanlashingiz kerak!!!")
          SetSelectedColor("Rang tanlang")
          SetSelectedSize("o'lcham tanlang")
          setCount(1)
        }
      })
      .catch((error) => console.error(error));
  }

  const deleteToCart = (id) => {
    console.log(id);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`https://ecommercev01.pythonanywhere.com/order/remove-from-cart?cart_item_id=${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
      })
      .catch((error) => console.error(error));
  }

  const likIsCount = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://ecommercev01.pythonanywhere.com/action/my-wishlist/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLikeCount(result)
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getUser()
  }, [getToken()])

  useEffect(() => {
    getDate()
    cartDate()
    likIsCount()
  }, [])


  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <BrowserRouter>
        {
          <Modal addtoCart={addtoCart} selectedProduct={selectedProduct} selectedSize={selectedSize} selectedColor={selectedColor} openModaltoCart={openModaltoCart} count={count} setCount={setCount} setopenModaltoCart={setopenModaltoCart} SetSelectedSize={SetSelectedSize} SetSelectedColor={SetSelectedColor} />
        }
        <ToastContainer pauseOnFocusLoss closeOnClick={true} position="top-center"/>
        <Navbar likIsCount={likIsCount} cartDate={cartDate} likecount={likecount} user={user} user_info={user_info} getUser={getUser} addCart={addCart} openModaltoCart={openModaltoCart} setopenModaltoCart={setopenModaltoCart} inCarts={inCarts} product={product} />
        <Routes>
          <Route path='/' element={<Home likIsCount={likIsCount} getSelectedInfo={getSelectedInfo} product={product} addCart={addCart} setAddCart={setAddCart} setopenModaltoCart={setopenModaltoCart} getDate={getDate} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/singup' element={<SingUp getUser={getUser} likIsCount={likIsCount} />} />
          <Route path='/login' element={<Login getUser={getUser} likIsCount={likIsCount} cartDate={cartDate} />} />
          <Route path='/cart' element={<Cart cartDate={cartDate} deleteToCart={deleteToCart} getSelectedInfo={getSelectedInfo} setopenModaltoCart={setopenModaltoCart} inCarts={inCarts} />} />
          <Route path='/cartbox' element={<Cartbox />} />
          <Route path='/OneProduct/:id' element={<OneProduct />} />
          <Route path='/wishlist' element={<Wishlist likecount={likecount} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App