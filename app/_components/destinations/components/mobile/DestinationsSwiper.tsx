"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import MobileDestinationCard from "./MobileDestinationCard";

export default function DestinationsSwiper() {
  return (
    <Swiper slidesPerView="auto" spaceBetween={16} className="min-w-0 flex-1!">
      <SwiperSlide className="relative w-auto!">
        <MobileDestinationCard />
      </SwiperSlide>
    </Swiper>
  );
}
