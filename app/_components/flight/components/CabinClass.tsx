"use client";

import { FieldError, ListBox, Select } from "@heroui/react";
import ClassListBoxItem from "./ClassListBoxItem";
import { useFlightSearch } from "@/_store/flightSearchStore";
import useCabinClasses from "@/_hooks/useCabinClasses";

type CabinClassProps = {
  submitAttempted: boolean;
  isLoading: boolean;
};

export default function CabinClass({
  submitAttempted,
  isLoading,
}: CabinClassProps) {
  const { cabinClass, setCabinClass } = useFlightSearch();
  const isInvalid = !cabinClass && submitAttempted;
  const { cabinClasses } = useCabinClasses();
  return (
    <Select
      aria-label="Cabin class"
      placeholder="کلاس پرواز"
      className="w-full flex-1"
      value={cabinClass}
      onChange={(value) => setCabinClass(value as typeof cabinClass)}
      isInvalid={isInvalid}
      isDisabled={isLoading}
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
              label={item.class}
              description={item.class_en}
            />
          ))}
        </ListBox>
      </Select.Popover>
      <div className="relative">
        <FieldError className="absolute inset-s-0 top-full text-xs md:mt-1">
          لطفا کلاس پرواز را انتخاب کنید
        </FieldError>
      </div>
    </Select>
  );
}
