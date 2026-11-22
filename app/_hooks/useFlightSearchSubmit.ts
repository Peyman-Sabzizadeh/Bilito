"use client";

import { useRouter } from "next/navigation";
import { useFlightSearch } from "@/_store/flightSearchStore";
import { useState } from "react";

export default function useFlightSearchSubmit() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {
      flightType,
      tripType,
      origin,
      destination,
      departureDate,
      rangeDate,
      passengers,
      cabinClass,
    } = useFlightSearch.getState();
    const isOneWay = tripType === "one-way";
    const isRoundTrip = tripType === "round-trip";
    const { adult, child, infant } = passengers;
    const departureDateValue = isOneWay
      ? departureDate?.toString()
      : rangeDate?.start.toString();
    const returnDateValue = isRoundTrip ? rangeDate?.end.toString() : undefined;
    if (tripType === "multi-city") return;
    if (!origin || !destination || !departureDateValue || !cabinClass) {
      return;
    }

    const params = new URLSearchParams({
      flightType,
      tripType,
      from: origin,
      to: destination,
      departureDate: departureDateValue,
      adult: String(adult),
      child: String(child),
      infant: String(infant),
      cabinClass,
    });

    if (returnDateValue) {
      params.set("returnDate", returnDateValue);
    }
    setIsLoading(true);
    router.push(`/results?${params.toString()}`);
  };

  return {
    handleSearchSubmit,
    isLoading,
  };
}
