"use client";

import Container from "../Container";
import { useState } from "react";
import NavigationButton from "./components/NavigationButton";
import SearchHistoryHeader from "./components/SearchHistoryHeader";
import HistorySwiper from "./components/HistorySwiper";

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
      <SearchHistoryHeader clearAll={clearAll} />
      {!history.length ? (
        "تاریخچه ای وجود ندارد!"
      ) : (
        <div className="flex gap-9">
          <NavigationButton type="prev" setElement={setPrevEl} />
          <HistorySwiper
            nextEl={nextEl}
            prevEl={prevEl}
            history={history}
            removeItem={removeItem}
          />
          <NavigationButton type="next" setElement={setNextEl} />
        </div>
      )}
    </Container>
  );
}
