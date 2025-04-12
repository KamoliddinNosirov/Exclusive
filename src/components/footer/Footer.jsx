import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <>
    <footer>
            <div className="container">
                <div className="logo">
                    <h1>Exclusive</h1>
                    <h3>Subscribe</h3>
                    <p>Get 10% off your first order</p>
                    <div className="send">
                        <input type="text" placeholder='Enter your email' />
                        <img src="/public/nav-hero/send.svg" alt="" />
                    </div>
                </div>
                <ul>
                    <span>Support</span>
                    <li><a href="">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a></li>
                    <li><a href="">exclusive@gmail.com</a></li>
                    <li><a href="">+88015-88888-9999</a></li>
                </ul>
                <ul>
                    <span>Account</span>
                    <li><a href="">My Account</a></li>
                    <li><a href="">Login / Register</a></li>
                    <li><a href="">Cart</a></li>
                    <li><a href="">Wishlist</a></li>
                    <li><a href="">Shop</a></li>
                </ul>
                <ul>
                    <span>Quick Link</span>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms Of Use</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className="down">
                    <h2>Download App</h2>
                    <p>Save $3 with App New User Only</p>
                    <div className="scan">
                        <img src="/public/nav-hero//Qr Code.png" alt="" className="mainscan" />
                        <div className="scan-x">
                            <img src="/public/nav-hero/GooglePlay.png" alt="" />
                            <img src="/public/nav-hero/AppStore.png" alt="" />
                        </div>
                    </div>
                    <div className="icons">
                        <img src="/public/nav-hero/Icon-Facebook.svg" alt="" />
                        <img src="/public/nav-hero/Group.svg" alt="" />
                        <img src="/public/nav-hero/icon-instagram.svg" alt="" />
                        <img src="/public/nav-hero/Icon-Linkedin.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="container container2">
                <p>Copyright Rimel 2022. All right reserved</p>
            </div>
        </footer>
    </>
  )
}

export default Footer