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

  const [product2, setproduct2] = useState([
    {
      img: "/public/imgs/img1.png",
      title: "The north coat",
      discount_price: 260,
      price: 360,
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          ball: 65,
        },
      ],
      discount: 0,
    },
    {
      img: "/public/imgs/img2.png",
      title: "Gucci duffle bag",
      discount_price: 960,
      price: 1160,
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: false,
        },
        {
          ball: 65,
        },
      ],
      discount: 0,
    },
    {
      img: "/public/imgs/img3.png",
      title: "RGB liquid CPU Cooler",
      discount_price: 160,
      price: 170,
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: false,
        },
        {
          ball: 65,
        },
      ],
      discount: 0,
    },
    {
      img: "/public/imgs/img4.png",
      title: "Small BookSelf",
      discount_price: 0,
      price: 360,
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          ball: 65,
        },
      ],
      discount: 0,
    }
  ])
  const [product3, setproduct3] = useState([
    {
      img: "/public/imgs/imgg1.png",
      title: "Breed Dry Dog Food",
      price: 100,
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          ball: 35,
        },
      ],
      discount: 0,
      new: false,
      colors: [],
    },
    {
      img: "/public/imgs/imgg2.png",
      title: "CANON EOS DSLR Camera",
      price: 360,
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: false,
        },
        {
          ball: 95,
        },
      ],
      discount: 0,
      new: false,
      colors: [],
    },
    {
      img: "/public/imgs/imgg3.png",
      title: "ASUS FHD Gaming Laptop",
      price: 700,
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: false,
        },
        {
          ball: 325,
        },
      ],
      discount: 0,
      new: false,
      colors: [],
    },
    {
      img: "/public/imgs/imgg4.png",
      title: "Curology Product Set ",
      price: 500,
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          ball: 145,
        },
      ],
      discount: 0,
      new: false,
      colors: [],
    },
    {
      img: "/public/imgs/imgg5.png",
      title: "Kids Electric Car",
      price: 960,
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          ball: 65,
        },
      ],
      discount: 0,
      new: true,
      colors: ["red", "cadetblue"]
    },
    {
      img: "/public/imgs/imgg6.png",
      title: "Jr. Zoom Soccer Cleats",
      price: 1160,
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: false,
        },
        {
          ball: 35,
        },
      ],
      discount: 0,
      new: false,
      colors: ["yellow", "red"]
    },
    {
      img: "/public/imgs/imgg7.png",
      title: "GP11 Shooter USB Gamepad",
      price: 660,
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: false,
        },
        {
          ball: 55,
        },
      ],
      discount: 0,
      new: true,
      colors: ["red", "black"]
    },
    {
      img: "/public/imgs/imgg8.png",
      title: "Quilted Satin Jacket",
      price: 660,
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          ball: 55,
        },
      ],
      discount: 0,
      new: false,
      colors: ["red", "green"]
    }
  ])

  console.log(product);
  

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
        "color": selectedColor,
        "size": selectedSize
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
      .then((response) => response.json())
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
    getSelectedInfo()
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
        <ToastContainer pauseOnFocusLoss closeOnClick={true} />
        <Navbar likIsCount={likIsCount} cartDate={cartDate} likecount={likecount} user={user} user_info={user_info} getUser={getUser} addCart={addCart} openModaltoCart={openModaltoCart} setopenModaltoCart={setopenModaltoCart} inCarts={inCarts} product={product} />
        <Routes>
          <Route path='/' element={<Home likIsCount={likIsCount} getSelectedInfo={getSelectedInfo} product={product} product2={product2} addCart={addCart} setAddCart={setAddCart} product3={product3} setopenModaltoCart={setopenModaltoCart} getDate={getDate} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/singup' element={<SingUp getUser={getUser} likIsCount={likIsCount} />} />
          <Route path='/login' element={<Login getUser={getUser} likIsCount={likIsCount} cartDate={cartDate} />} />
          <Route path='/cart' element={<Cart cartDate={cartDate} deleteToCart={deleteToCart} getSelectedInfo={getSelectedInfo} setopenModaltoCart={setopenModaltoCart} inCarts={inCarts} />} />
          <Route path='/cartbox' element={<Cartbox />} />
          <Route path='/OneProduct/:id' element={<OneProduct />} />
          <Route path='/wishlist' element={<Wishlist likecount={likecount} product2={product2} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App