import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderBottom from "./Components/Header/HeaderBottom";
import HeaderTop from "./Components/Header/HeaderTop";
import Slideproduct from "./Components/Slideproduct/Slideproduct";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/productdetails/ProductDetails";
import Cart from "./Pages/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./Components/Slideproduct/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import PageTranstion from "./Components/PageTranstion";
import CategoryPage from "./Pages/ategoryPage/CategoryPage";
import SearchResylt from "./Pages/SearchResylt";
import Favoutie from "./Pages/favourite/Favoutie";

function App() {
  return (
    <>
      <header>
        <HeaderTop />
        <HeaderBottom />
      </header>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            padding: "14",
            borderRadius: "5px",
          },
        }}
      />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
        
                <Home />
           
            }
          />
         
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResylt />} /> 
          <Route path="/favourites" element={<Favoutie/>} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
