import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import swipestyle from "./Styles/swipeelem.module.css";
import "./Styles/swiper.css";
import styles from "./Styles/speakers.module.css";
// import required modules
import { EffectCoverflow, Autoplay, Pagination } from "swiper";

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
                        <img
                            className={styles.speakerimg}
                            src="https://res.cloudinary.com/damjdcgak/image/upload/v1675794854/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-07_at_23.44.47_g9pcfz-removebg-preview_vpmhjn.png"
                        ></img>
                    </div>
                        <h3 className={styles.spname}>Richard Stallman</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={swipestyle.slidediv}>
                        <img
                            className={styles.speakerimg}
                            src="https://res.cloudinary.com/damjdcgak/image/upload/v1676688246/Makeathon%205%20website/Speakers/Ali_Mustufa-Shaikh-removebg-preview_t0qq3g.png"
                        ></img>
                    </div>
                        <h3 className={styles.spname}>Ali Mustufa</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={swipestyle.slidediv}>
                        <img
                            className={styles.speakerimg}
                            src="https://res.cloudinary.com/damjdcgak/image/upload/v1675797998/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-07_at_23.42.33_kb1xs7-removebg-preview_wtiskc.png"
                        ></img>
                    </div>
                        <h3 className={styles.spname}>Shridhar Mankar</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={swipestyle.slidediv}>
                        <img
                            className={styles.speakerimg}
                            src="https://res.cloudinary.com/damjdcgak/image/upload/v1675794811/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-07_at_23.43.42_fnbwok-removebg-preview_kneizb.png"
                        ></img>
                    </div>
                        <h3 className={styles.spname}>Pritish Sehzpaul</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={swipestyle.slidediv}>
                        <img
                            className={styles.speakerimg}
                            src="https://res.cloudinary.com/damjdcgak/image/upload/v1675797928/Makeathon%205%20website/Speakers/IMG_4351-removebg-preview_dhi8pg.png"
                        ></img>
                    </div>
                        <h3 className={styles.spname}>Ajinkya lohakare</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={swipestyle.slidediv}>
                        <img
                            className={styles.speakerimg}
                            src="https://res.cloudinary.com/damjdcgak/image/upload/v1676689462/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-17_at_1.43.01_AM__1_-removebg-preview_1_clo56j.png"
                        ></img>
                    </div>
                        <h3 className={styles.spname}>Utkarsh Saxena</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={swipestyle.slidediv}>
                        <img
                            className={styles.speakerimg}
                            src="https://res.cloudinary.com/damjdcgak/image/upload/v1676689823/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-17_at_1.43.01_AM-removebg-preview_wphim7.png"
                        ></img>
                    </div>
                        <h3 className={styles.spname}>Prashul</h3>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className={swipestyle.slidediv}>
                        <img
                            className={styles.speakerimg}
                            src="https://res.cloudinary.com/damjdcgak/image/upload/v1676689823/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-17_at_1.43.01_AM-removebg-preview_wphim7.png"
                        ></img>
                        <h3 className={styles.spname}>Name</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={swipestyle.slidediv}>
                        <img
                            className={styles.speakerimg}
                            src="https://res.cloudinary.com/damjdcgak/image/upload/v1675794811/Makeathon%205%20website/Speakers/WhatsApp_Image_2023-02-07_at_23.43.42_fnbwok-removebg-preview_kneizb.png"
                        ></img>
                        <h3 className={styles.spname}>Name</h3>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </>
    );
}

export default Swipeelement;
