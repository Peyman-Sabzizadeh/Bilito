import type { TravelDestination } from "@/_data/travelDestinations";
import { useFlightSearch } from "@/_store/flightSearchStore";
import { Button } from "@heroui/react";

type DestinationInfoProps = Pick<
  TravelDestination,
  "persianDestination" | "title"
>;

export default function DestinationInfo({
  title,
  persianDestination,
}: DestinationInfoProps) {
  const setDestination = useFlightSearch((state) => state.setDestination);
  return (
    <div className="absolute inset-0 flex flex-col justify-end gap-2 p-4">
      <h3 className="text-lg font-light text-white md:font-bold">{title}</h3>
      <Button
        onClick={() => setDestination(persianDestination)}
        className="rounded-lg border border-white bg-transparent p-2 font-light"
      >
        خرید بلیط پروازهای {persianDestination}
      </Button>
    </div>
  );
}
