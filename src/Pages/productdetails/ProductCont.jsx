import React, { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { CartContext } from "../../Components/context/cartconxt";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProductCont = ({ pDetails }) => {

     const navigate = useNavigate();

      const {cartitem, addToCart } = useContext(CartContext);
    
  const isinCart = cartitem.some((i) => i.id === pDetails.id);

        const handleAddToCart =()=>{
    addToCart(pDetails)
    toast.success(
      <div className="toast-suc">
<div className="t-img">
          <img src={pDetails.images[0]} alt="hh"/>
</div>

        <div className="toast-content">
          <strong>{pDetails.title}</strong> add to  cart
          <button className="btn" onClick={()=> navigate('/cart')}>view cart</button>
        </div>
      </div>
      , {duration : 3500}
    )
  }
  return (
    <div className="item-details">
      <h1>{pDetails.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalf />
      </div>
      <p className="price">${pDetails.price}</p>
      <h3>
        Avilability: <span>{pDetails.availabilityStatus}</span>
      </h3>
      <h5>
        Brand : <span>{pDetails.brand}</span>
      </h5>
      <p className="desc">{pDetails.description}</p>
      <button className={`btn ${isinCart ? 'in-cart' : ''}`} onClick={() => handleAddToCart(pDetails)}>
       { isinCart ? "Added to cart" : 'add to cart' }<CiShoppingCart />
      </button>
    </div>
  );
};

export default ProductCont;
