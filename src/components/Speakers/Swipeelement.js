import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import swipestyle from "./Styles/swipeelem.module.css"
import "./Styles/swiper.css";

// import required modules
import { EffectCoverflow, Autoplay ,Pagination } from "swiper";

function Swipeelement() {
    return (
        <>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={true}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className={swipestyle.slidediv}>

            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={swipestyle.slidediv}>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={swipestyle.slidediv}>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={swipestyle.slidediv}>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={swipestyle.slidediv}>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={swipestyle.slidediv}>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={swipestyle.slidediv}>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={swipestyle.slidediv}>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={swipestyle.slidediv}>
          
          </div>
        </SwiperSlide>
      </Swiper>
        </>
    )
}

export default Swipeelement
