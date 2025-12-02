import React, { useContext, useState } from "react";
import { CartContext } from "../../Components/context/cartconxt";
import "./cart.css";
import { FaTrash } from "react-icons/fa";
import PageTranstion from "../../Components/PageTranstion";

const Cart = () => {
  const { cartitem , increaseQuantity , decreaseQuantity , deleteitem} = useContext(CartContext);
  const total = cartitem.reduce((acc, cur) => acc + cur.price *cur.quantity, 0).toFixed(2);

   console.log(cartitem)
  return (
    <PageTranstion>
      <div className="checkout">
      <div className="order-summery">
        <h1>order summery</h1>
        <div className="items">
          {cartitem.length === 0 ? (
            <p>cart is empty</p>
          ) : (
            cartitem.map((item, index) => (
              <div className="item_cart" key={index}>
                <div className="img_name">
                  <img src={item.images[0]} alt="" />
                </div>
                <div className="content">
                  <h4>{item.title}</h4>
                  <h4 className="price_item">${item.price}</h4>

                  <div className="quality_controle">
                    <span className="quantity">{item.quantity}</span>
                                        <button onClick={()=>increaseQuantity(item.id)}>+</button>

                    <button onClick={()=>decreaseQuantity(item.id)}>-</button>
                  </div>
                </div>
                <button className="deletel_item" onClick={()=> deleteitem(item.id)}>
<FaTrash />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="bottom_summery">
          <div className="shop">
            <p>total</p>
            <span className="total_checkout">${total}</span>
          </div>
          <div className="submit_order">
            <button type="submit">place order</button>
          </div>
        </div>
      </div>
    </div>
    </PageTranstion>
  );
};

export default Cart;
