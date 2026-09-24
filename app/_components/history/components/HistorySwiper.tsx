import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import HistorySwiperSlide from "./HistorySwiperSlide";

type HistorySwiperProps = {
  nextEl: HTMLButtonElement | null;
  prevEl: HTMLButtonElement | null;
  history: {
    id: number;
    from: string;
    to: string;
  }[];
  removeItem: (id: number) => void;
};

export default function HistorySwiper({
  nextEl,
  prevEl,
  history,
  removeItem,
}: HistorySwiperProps) {
  return (
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
          <HistorySwiperSlide item={item} removeItem={removeItem} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
