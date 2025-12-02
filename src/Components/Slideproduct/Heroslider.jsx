import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import './Slideproduct.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className='hero'>
    <div className="container">
          <Swiper pagination={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction : false,
          }}
          modules={[Pagination ,Autoplay]}
          
          
           className="mySwiper">
        <SwiperSlide>
        <div className="content">
            <h4>Itroducing to the new</h4>
            <h3>Microsoft Xbox <br/> 360 controller </h3>
       
       <p>Windows Xp/10/7/78 ps3,tv Box</p>
       <Link to="/" className='btn'>Shop  now
       </Link> 
        </div>
               <img src="/src/img/banner_Hero1.jpg" alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
            <h4>Itroducing to the new</h4>
            <h3>Microsoft Xbox <br/> 360 controller </h3>
       
       <p>Windows Xp/10/7/78 ps3,tv Box</p>
       <Link to="/" className='btn'>Shop  now
       </Link> 
        </div>
               <img src="/src/img/banner_Hero3.jpg" alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
            <h4>Itroducing to the new</h4>
            <h3>Microsoft Xbox <br/> 360 controller </h3>
       
       <p>Windows Xp/10/7/78 ps3,tv Box</p>
       <Link to="/" className='btn'>Shop  now
       </Link> 
        </div>
               <img src="/src/img/banner_Hero2.jpg" alt="" />

        </SwiperSlide>
 
 
      </Swiper>
    </div>
    </div>
  );
}
 
 