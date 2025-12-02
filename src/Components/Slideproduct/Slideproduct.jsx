import React from "react";
import "./Slideproduct.css";
import Product from "./Product";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const Slideproduct = ({data,title}) => {
  return (
    <div className="slide_product slide">
      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            officiis.
          </p>
        </div>

        <Swiper loop={true}
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction : false,
          }}
          modules={[Pagination ,Autoplay]}
          className="mySwiper"
        >
        {data.map((item)=>(
    <SwiperSlide>
            <Product item={item}/>
          </SwiperSlide>
        ))}
      
         
    
        </Swiper>
      </div>
    </div>
  );
};

export default Slideproduct;
