"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { travelDestinations } from "@/_data/travelDestinations";
import DestinationCard from "../DestinationCard";

export default function DestinationsSwiper() {
  return (
    <Swiper slidesPerView="auto" spaceBetween={16} className="min-w-0 flex-1!">
      {travelDestinations.map((item) => (
        <SwiperSlide key={item.persianDestination} className="w-auto!">
          <DestinationCard item={item} device="mobile" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
