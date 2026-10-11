"use client";

import { Popover } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import PassengerFields from "./PassengerFields";
import { useFlightSearch } from "@/_store/flightSearchStore";

type PassengerSelectorProps = {
  submitAttempted: boolean;
};

export default function PassengerSelector({
  submitAttempted,
}: PassengerSelectorProps) {
  const totalPassengers = useFlightSearch(
    (state) =>
      state.passengers.adult + state.passengers.child + state.passengers.infant,
  );
  const isInvalid = !totalPassengers && submitAttempted;
  return (
    <div className="relative w-full flex-1">
      <Popover>
        <Popover.Trigger className="w-full flex-1">
          <div
            className={`${isInvalid ? "border-danger" : "border-gray-3"} text-gray-8 flex h-14 cursor-pointer items-center justify-between rounded-lg border pr-3 pl-2 text-sm max-md:font-medium md:h-12`}
          >
            <span>
              {!totalPassengers ? "تعداد " : totalPassengers + " "}
              مسافر
            </span>
            <ChevronDown size={18} className="md:hidden" />
          </div>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Dialog className="max-w-none">
            <PassengerFields />
          </Popover.Dialog>
        </Popover.Content>
      </Popover>
      {isInvalid && (
        <p
          role="alert"
          className="text-danger absolute inset-s-0 top-full text-xs whitespace-nowrap md:mt-1.5"
        >
          حداقل یک بزرگسال را انتخاب کنید
        </p>
      )}
    </div>
  );
}
