"use client";

import { RadioGroup, Radio } from "@heroui/react";
import { useFlightSearch } from "@/_store/flightSearchStore";

export default function TripType() {
  const tripType = useFlightSearch((state) => state.tripType);
  const setTripType = useFlightSearch((state) => state.setTripType);
  return (
    <RadioGroup
      aria-label="Trip type"
      value={tripType}
      onChange={(value) => setTripType(value as typeof tripType)}
      orientation="horizontal"
      className="*:border-primary text-shade-3 *:data-[selected=true]:bg-primary mt-6 w-full flex-nowrap justify-between gap-4 text-[10px] font-medium *:flex *:h-8 *:min-w-24 *:flex-1 *:cursor-pointer *:items-center *:justify-center *:rounded-lg *:border *:px-4 *:py-2 *:transition-all *:data-[selected=true]:text-white md:mr-2 md:justify-start md:text-xs *:md:h-10 *:md:flex-none"
    >
      <Radio value="one-way">یک طرفه</Radio>
      <Radio value="round-trip">رفت و برگشت</Radio>
      <Radio value="multi-city">چند مسیره</Radio>
    </RadioGroup>
  );
}
