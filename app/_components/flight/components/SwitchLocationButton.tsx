"use client";

import { useFlightSearch } from "@/_store/flightSearchStore";
import { Button } from "@heroui/react";
import { ArrowRightLeft } from "lucide-react";

export default function SwitchLocationButton() {
  const origin = useFlightSearch((state) => state.origin);
  const destination = useFlightSearch((state) => state.destination);
  const setOrigin = useFlightSearch((state) => state.setOrigin);
  const setDestination = useFlightSearch((state) => state.setDestination);
  return (
    <Button
      isIconOnly
      className="text-gray-9 size-4 bg-transparent hover:bg-transparent max-md:hidden"
      onPress={() => {
        setOrigin(destination);
        setDestination(origin);
      }}
    >
      <ArrowRightLeft />
    </Button>
  );
}
