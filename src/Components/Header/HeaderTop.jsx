import React, { useContext } from "react";
import "./header.css";
import { CiShoppingCart } from "react-icons/ci";
import { Link, Links } from "react-router-dom";
import logo from "../../img/logo.png";
import { FaRegHeart } from "react-icons/fa";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { CartContext } from "../context/cartconxt";
import SearchBox from "./SearchBox";

const HeaderTop = () => {
  const { cartitem, favirouit } = useContext(CartContext);
  return (
    <div className="top">
      <div className="container">
        <Link className="logo" to="/">
          <img src={logo} alt="KK" />
        </Link>
        <SearchBox />
        <div className="icons">
       <Link to='/favourites'>
           <div className="icon">
            <FaRegHeart />
            <span className="count">{favirouit.length}</span>
          </div>
       </Link>
          <div className="icon">
            <Link to="/cart">
              <CiShoppingCart />
              <span className="count">{cartitem.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
