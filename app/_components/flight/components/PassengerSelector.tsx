"use client";

import { Popover } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import PassengerFields from "./PassengerFields";
import { useState } from "react";

export type Passengers = {
  adult: number;
  child: number;
  infant: number;
};

export default function PassengerSelector() {
  const [passengers, setPassengers] = useState<Passengers>({
    adult: 0,
    child: 0,
    infant: 0,
  });

  const totalPassengers =
    passengers.adult + passengers.child + passengers.infant;

  return (
    <Popover>
      <Popover.Trigger>
        <div className="border-gray-3 text-gray-8 flex h-14 cursor-pointer items-center justify-between rounded-lg border pr-3 pl-2 text-sm max-md:font-medium md:w-35">
          <span>
            {!totalPassengers ? "تعداد " : totalPassengers + " "}
            مسافر
          </span>
          <ChevronDown size={18} className="md:hidden" />
        </div>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Dialog className="max-w-none">
          <PassengerFields
            passengers={passengers}
            setPassengers={setPassengers}
          />
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  );
}
