"use client";

import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import "swiper/css/bundle";

export default function SearchHistory() {
  return (
    <Container>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Container>
  );
}
