"use client";

import { Popover } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import PassengerFields from "./PassengerFields";
import { useFlightSearch } from "@/_store/flightSearchStore";

export default function PassengerSelector() {
  const totalPassengers = useFlightSearch(
    (state) =>
      state.passengers.adult + state.passengers.child + state.passengers.infant,
  );
  return (
    <Popover>
      <Popover.Trigger className="w-full flex-1">
        <div className="border-gray-3 text-gray-8 flex h-14 cursor-pointer items-center justify-between rounded-lg border pr-3 pl-2 text-sm max-md:font-medium md:h-12">
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
  );
}
