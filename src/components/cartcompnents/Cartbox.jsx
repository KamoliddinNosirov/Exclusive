import { MdOutlineEdit } from "react-icons/md";
import "./Cartbox.css"
import { IoTrash } from "react-icons/io5";


function Cartbox({cartDate, deleteToCart, getSelectedInfo, item, deleteCart, setopenModaltoCart }) {

    return (
        <>
            <div className="cart-product">
                <div className="cart">
                    <img src={`https://ecommercev01.pythonanywhere.com/${item?.pictures[0]?.file}`} alt="" />
                    <p className='title'>{item?.title?.length >= 32 ? item?.title?.slice(0, 32) + "..." : item?.title}</p>
                </div>
                <p className='price'>$ {item.price}</p>
                <div className="cart2">
                    <input type="number" value={item.quantity} />
                    {/* <p>1</p>
                    <div className="buttons">
                        <span><RiArrowUpSLine /></span>
                        <span><RiArrowDownSLine /></span>
                    </div> */}
                </div>
                <p className='subtotal'>$ {item.subtotal}</p>
                <p onClick={() => {
                    if(item?.id){
                        getSelectedInfo(item?.id)
                        cartDate()
                    }
                }} className="edit"><MdOutlineEdit /></p>
                <p onClick={() => {
                    if(item?.id){
                        deleteToCart(item?.id)
                    }else{
                        alert("eror")
                    }
                }} className="trash"><IoTrash /></p>
            </div>
        </>
    )
}

export default Cartbox