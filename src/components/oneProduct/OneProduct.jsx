import React, { useEffect, useState } from 'react'
import "./OneProduct.css"
import { useParams } from 'react-router-dom'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Stars from '../stars/Stars';

function OneProduct() {

    const { id } = useParams()
    const [like, setLike] = useState(false)

    const [product, setProduct] = useState(null)
    const [count, setCount] = useState(null)
    const [loading, setLoading] = useState(false)

    const getDate = () => {
        setLoading(true)
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`https://ecommercev01.pythonanywhere.com/product/detail/?product_id=${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setProduct(result)
                setCount(result?.review_quantity)
                setLoading(false)
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        getDate()
    }, [])


    // const [mainImg, setMainImg] = useState(product?.pictures[0]?.file)
    const [mainImg, setMainImg] = useState("")
    const [selectedColor, SetSelectedColor] = useState(null)
    const [selectedSize, SetSelectedSize] = useState(null)

    useEffect(() => {
        setMainImg(product?.pictures[0]?.file)
    }, [product])

    const orederProduct = () => {
        if (selectedColor && selectedSize) {
            toast.success(`${product?.title} maxsulotiga buyurtma berildi!`)
        } else {
            alert("Tanlanmagan element bor!");
        }
    }

    return (
        <div onLoad={() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }} className="OneProduct">
            <div className={loading ? "loading" : "loading actice"}><img src="https://loading.io/assets/mod/spinner/spinner/lg.gif" alt="" /></div>
            {
                product && <div className="container">
                    <p className="from">
                        <span>Account</span> <span>/</span> <span>Gaming</span>
                        <span>/</span> {product?.title}
                    </p>
                    <div className="block">
                        <div className="part-imgs">
                            <div className="imgs">
                                {
                                    product?.pictures?.map((item, keyid) => {
                                        return <img onClick={() => {
                                            setMainImg(item?.file)
                                        }} key={keyid} src={`https://ecommercev01.pythonanywhere.com/${item?.file}`} alt="" />
                                    })
                                }
                            </div>
                            <div className="main-img">
                                <img src={`https://ecommercev01.pythonanywhere.com/${mainImg}`} alt="" />
                            </div>
                        </div>
                        <div className="info">
                            <h2>{product?.title?.length > 30 ? product?.title?.slice(0, 30) + "..." : product?.title}</h2>
                            <div className="price">
                                <p className='price-title'>Price:</p>
                                <p>{product?.discount_price ? product?.discount_price : product?.price}</p>
                                <span className={product?.discount_price ? "dsc" : "dsc active"}>{product?.price}</span>
                            </div>
                            <p className='product-dsc'>{product?.description?.length < 200 ? product?.description : product?.description?.slice(0, 190) + "..."}</p>
                            <div className="stars">
                                <Stars star={product?.stars} />
                            </div>
                            <p className='underline'></p>
                            <div className="colors">
                                <p>{product?.properties?.color ? "Colourse :" : "Colourse : mavjud emas"}</p>
                                {
                                    product.properties?.color.map((item, keyid) => {
                                        return (
                                            <div
                                                key={keyid}
                                                style={{ backgroundColor: item }}
                                                onClick={() => { SetSelectedColor(item) }}
                                                className={selectedColor == item ? "dot active" : "dot"}>
                                            </div>)
                                    })
                                }
                            </div>
                            <div className="sizes">
                                <p className={product?.properties?.size ? "size-div" : "size-divno"} >{product?.properties?.size ? "Size :" : "Size: mavjud emas"}</p>
                                {
                                    product.properties?.size?.map((item, keyid) => {
                                        return (
                                            <div
                                                key={keyid}
                                                style={{ backgroundColor: item }}
                                                onClick={() => { SetSelectedSize(item) }}
                                                className={selectedSize == item ? "size-box active" : "size-box"}>
                                                <p>{item}</p>
                                            </div>)
                                    })
                                }
                            </div>
                            <div className="part">
                                <div className="count">
                                    <span className='minus' onClick={() => {
                                        setCount(count > 1 ? count - 1 : 1)
                                    }}><FaMinus /></span>
                                    <p>{count}</p>
                                    <span className='plus' onClick={() => {
                                        setCount(count + 1)
                                    }}><FaPlus /></span>
                                </div>
                                <button onClick={orederProduct}>Buy Now</button>
                                <span onClick={() => {
                                    setLike(!like)
                                }} className='like'> {like ? <FcLike /> : <FcLikePlaceholder />}</span>
                            </div>
                            <div className="bolim">
                                <div className="drive drive-info2">
                                    <img src="/public/nav-hero/drive.svg" alt="" />
                                    <div className="drive-info ">
                                        <h4>Free Delivery</h4>
                                        <p>Enter your postal code for Delivery Availability</p>
                                    </div>
                                </div>
                                <div className="drive">
                                    <img src="/public/nav-hero/Icon-return.svg" alt="" />
                                    <div className="drive-info">
                                        <h4>Return Delivery</h4>
                                        <p>Free 30 Days Delivery Returns. Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default OneProduct