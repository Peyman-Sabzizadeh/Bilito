"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DestinationsSwiper() {
  return (
    <Swiper slidesPerView="auto" className="min-w-0 flex-1!">
      <SwiperSlide className="w-auto!">
        Swiper slide 1
      </SwiperSlide>
      <SwiperSlide className="w-auto!">
        Swiper slide 2
      </SwiperSlide>
      <SwiperSlide className="w-auto!">
        Swiper slide 3
      </SwiperSlide>
      <SwiperSlide className="w-auto!">
        Swiper slide 4
      </SwiperSlide>
    </Swiper>
  );
}
