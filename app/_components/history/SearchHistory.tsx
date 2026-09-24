"use client";

import Container from "../Container";
import { useState } from "react";
import { flightRoutes } from "@/_data/flightRoutes";
import NavigationButton from "./components/NavigationButton";
import SearchHistoryHeader from "./components/SearchHistoryHeader";
import HistorySwiper from "./components/HistorySwiper";

export default function SearchHistory() {
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);

  const [history, setHistory] = useState(flightRoutes);

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
