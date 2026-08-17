"use client";

import { useState } from "react";
import { RadioGroup, Radio } from "@heroui/react";

export default function TripType() {
  const [tripType, setTripType] = useState("one-way");

  return (
    <RadioGroup
      aria-label="Trip type"
      value={tripType}
      onChange={setTripType}
      orientation="horizontal"
      className="*:border-primary text-shade-3 *:data-[selected=true]:bg-primary mt-6 w-fit flex-nowrap gap-4 text-[10px] font-medium *:flex *:h-8 *:min-w-24 *:cursor-pointer *:items-center *:justify-center *:rounded-lg *:border *:px-4 *:py-2 *:transition-all *:data-[selected=true]:text-white md:mr-2 md:text-xs *:md:h-10"
    >
      <Radio value="one-way">یک طرفه</Radio>
      <Radio value="round-trip">رفت و برگشت</Radio>
      <Radio value="multi-city">چند مسیره</Radio>
    </RadioGroup>
  );
}
