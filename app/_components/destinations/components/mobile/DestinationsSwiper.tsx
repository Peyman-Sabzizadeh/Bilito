"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import MobileDestinationCard from "./MobileDestinationCard";
import { travelDestinations } from "@/_data/travelDestinations";

export default function DestinationsSwiper() {
  return (
    <Swiper slidesPerView="auto" spaceBetween={16} className="min-w-0 flex-1!">
      {travelDestinations.map((item) => (
        <SwiperSlide key={item.persianDestination} className="relative w-auto!">
          <MobileDestinationCard item={item}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
