"use client";

import { popularRoutes } from "@/_data/popularRoutes";
import { Tabs } from "@heroui/react";
import CityRoute from "./CityRoute";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CityRoutesWrapper() {
  return (
    <div>
      {popularRoutes.map((item) => (
        <Tabs.Panel key={item.city} id={item.city} className="p-0">
          <Swiper
            slidesPerView="auto"
            spaceBetween={16}
            className="min-w-0 flex-1!"
          >
            {item.routes.map((route) => (
              <SwiperSlide key={route.id} className="w-auto!">
                <CityRoute city={item.city} route={route} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Tabs.Panel>
      ))}
    </div>
  );
}
