import { useFlightSearch } from "@/_store/flightSearchStore";
import { Button } from "@heroui/react";

export default function DestinationInfo() {
  const setDestination = useFlightSearch((state) => state.setDestination);
  return (
    <div className="absolute inset-0 flex flex-col justify-end gap-2 p-4">
      <h3 className="text-lg font-light text-white md:font-bold">
        بهترین فصل شنا
      </h3>
      <Button
        onClick={() => setDestination("کیش")}
        className="rounded-lg border border-white bg-transparent p-2 font-light"
      >
        خرید بلیط پروازهای کیش
      </Button>
    </div>
  );
}
