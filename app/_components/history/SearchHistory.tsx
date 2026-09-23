"use client";

import Container from "../Container";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import "swiper/css";
import { Button } from "@heroui/react";
import { ChevronLeft, ChevronRight, HistoryIcon, XSquare } from "lucide-react";

export default function SearchHistory() {
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);

  const [history, setHistory] = useState([
    { id: 1, from: "میامی", to: "استانبول" },
    { id: 2, from: "اسلام آباد", to: "دبی" },
    { id: 3, from: "برلین", to: "سانفرانسیسکو" },
    { id: 4, from: "مسکو", to: "ابوظبی" },
    { id: 5, from: "دوحه", to: "لندن" },
    { id: 6, from: "دوشنبه", to: "مسقط" },
    { id: 7, from: "لیسبون", to: "بغداد" },
    { id: 8, from: "کابل", to: "پکن" },
    { id: 9, from: "ملبورن", to: "میشیگان" },
    { id: 10, from: "تگزاس", to: "نیویورک" },
  ]);

  const removeItem = (id: number) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    setHistory([]);
  };

  return (
    <Container className="flex flex-col gap-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="text-gray-8 flex gap-2">
          <HistoryIcon strokeWidth={1.5} />
          <h2>تاریخچه جستجو</h2>
        </div>
        <Button
          onClick={clearAll}
          className="text-primary size-auto bg-transparent p-0 max-md:hidden"
        >
          پاک کردن همه
        </Button>
      </div>
      {!history.length ? (
        "تاریخچه ای وجود ندارد!"
      ) : (
        <div className="flex gap-9">
          <Button
            ref={setPrevEl}
            isIconOnly
            className="text-gray-7 border-gray-3 size-10.5 rounded-xl border bg-transparent p-0 max-md:hidden"
          >
            <ChevronRight className="size-6" strokeWidth={1.5} />
          </Button>
          <Swiper
            modules={[Navigation, A11y]}
            slidesPerView="auto"
            spaceBetween={16}
            watchOverflow={false}
            navigation={{
              nextEl,
              prevEl,
            }}
            className="md:min-w-0 md:flex-1!"
          >
            {history.map((item) => (
              <SwiperSlide key={item.id} className="w-auto!">
                <div className="border-gray-3 flex items-center gap-2 rounded-md border px-3 py-2">
                  <Button
                    isIconOnly
                    onClick={() => removeItem(item.id)}
                    className="text-gray-6 size-auto bg-transparent hover:bg-transparent"
                  >
                    <XSquare />
                  </Button>
                  <span className="text-gray-7 text-xs font-medium">
                    {item.from} به {item.to}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            ref={setNextEl}
            isIconOnly
            className="text-gray-7 border-gray-3 size-10.5 rounded-xl border bg-transparent p-0 max-md:hidden"
          >
            <ChevronLeft className="size-6" strokeWidth={1.5} />
          </Button>
        </div>
      )}
    </Container>
  );
}
