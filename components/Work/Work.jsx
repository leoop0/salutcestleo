import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function Work() {
  return (
    <div>
      <div className="selected-work wrapper">
        <div className="container">
          <h2 className="syne">Selected Work 🙌</h2>
        </div>
        <div className="work">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link href="/project/halto">
                <a>
                  <img src="/thumbnails/halto.png" alt="Halto Logo" />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/project/newgo">
                <a>
                  <img src="/thumbnails/newgo.png" alt="Newgo Logo" />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/project/doritos">
                <a>
                  <img src="/thumbnails/doritos.png" alt="Doritos Logo" />
                </a>
              </Link>
            </SwiperSlide>
            {/* <SwiperSlide></SwiperSlide> */}
          </Swiper>
        </div>

        <div className="btn-container wrapper">
          <div className="container">
            <Link href="/projects">
              <a className="btn">All projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
