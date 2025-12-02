import React, { useContext } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { FaShoppingCart, FaHeart, FaShare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { CartContext } from "../context/cartconxt";
import toast from 'react-hot-toast';
const Product = ({ item }) => {
  const { cartitem, addToCart ,  favirouit, removeFromFav,
        AddTofav } = useContext(CartContext);
 const navigate = useNavigate();
  console.log(cartitem);
  const isinCart = cartitem.some((i) => i.id === item.id);
  const isinFav = favirouit.some((i) => i.id === item.id);

  const handleAddToCart =()=>{
    addToCart(item)
    toast.success(
      <div className="toast-suc">
<div className="t-img">
          <img src={item.images[0]} alt="hh"/>
</div>

        <div className="toast-content">
          <strong>{item.title}</strong> add to  cart
          <button className="btn" onClick={()=> navigate('/cart')}>view cart</button>
        </div>
      </div>
      , {duration : 3500}
    )
  }
  const handleAddToFav =()=>{
    if(isinFav){
          toast.error(`${item.title} added to fav`)

removeFromFav(item.id)

    }else{
      AddTofav(item)
    toast.success(`${item.title} added to fav`)
    }
   
  }
  return (
    <div className={`product ${isinCart ? "inCart" : ""}`}>
      <Link to={`/products/${item.id}`}>
      <span className="Added"><FaCheck />
in cart</span>
        <div className="img-product">
          <img src={item.images[0]} alt="apple" />
        </div>
        <p className="product-name">{item.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
        </div>
        <p className="price">
          <span>${item.price}</span>
        </p>
      </Link>
      <div className="icons">
        <span className="cart-btn" onClick={() => handleAddToCart(item)}>
          <FaShoppingCart />
        </span>
        <span className={`${isinFav ? 'in-fav' : ''} `} onClick={() => handleAddToFav(item)}>
          <FaHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
};

export default Product;
