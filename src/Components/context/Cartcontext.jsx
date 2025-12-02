import React, { useEffect, useState } from "react";

import { CartContext } from "./cartconxt";

export default function Cartprovider({ children }) {
  //favcontext

  const [favirouit, setaFavitem] = useState(() => {
    const savefav = localStorage.getItem("FavItem");
    return savefav ? JSON.parse(savefav) : [];
  });
  const AddTofav = (item) => {
    setaFavitem((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };
useEffect(()=>{
  localStorage.setItem("FavItem" , JSON.stringify(favirouit))
},[favirouit])
const removeFromFav =(id)=>{
  setaFavitem.filter((item)=> item.id !== id)
}
  // cart context
  const [cartitem, setitem] = useState(() => {
    const saveitem = localStorage.getItem("cartitem");
    return saveitem ? JSON.parse(saveitem) : [];
  });

  const increaseQuantity = (id) => {
    setitem((previtem) =>
      previtem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const addToCart = (item) => {
    setitem((prev) => [...prev, { ...item, quantity: 1 }]);
  };

  const decreaseQuantity = (id) => {
    setitem((previtem) =>
      previtem.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const deleteitem = (id) => {
    setitem((prev) => prev.filter((ele) => ele.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("cartitem", JSON.stringify(cartitem));
  }, [cartitem]);
  return (
    <CartContext.Provider
      value={{
        cartitem,
        addToCart,

        increaseQuantity,
        decreaseQuantity,
        deleteitem,
        favirouit,
        AddTofav,
        removeFromFav
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
