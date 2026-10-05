"use client";

import { ListBox, Select } from "@heroui/react";
import ClassListBoxItem from "./ClassListBoxItem";
import { useFlightSearch } from "@/_store/flightSearchStore";
import { cabinClasses } from "@/_data/cabinClasses";

export default function CabinClass() {
  const cabinClass = useFlightSearch((state) => state.cabinClass);
  const setCabinClass = useFlightSearch((state) => state.setCabinClass);
  return (
    <Select
      aria-label="Cabin class"
      placeholder="کلاس پرواز"
      className="w-full flex-1"
      value={cabinClass}
      onChange={(value) => setCabinClass(value as typeof cabinClass)}
    >
      <Select.Trigger className="border-gray-3 *:text-gray-8 flex h-14 cursor-pointer items-center justify-between rounded-lg border shadow-none *:text-sm *:max-md:font-medium md:h-12">
        <Select.Value />
        <Select.Indicator className="ml-1 md:hidden" />
      </Select.Trigger>
      <Select.Popover className="w-64 min-w-auto">
        <ListBox
          aria-label="Flight class items"
          className="max-h-64 overflow-y-auto *:shrink-0"
        >
          {cabinClasses.map((item) => (
            <ClassListBoxItem
              key={item.value}
              label={item.label}
              description={item.description}
            />
          ))}
        </ListBox>
      </Select.Popover>
    </Select>
  );
}
