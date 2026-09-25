import type { TravelDestination } from "@/_data/travelDestinations";
import { useFlightSearch } from "@/_store/flightSearchStore";
import { Button } from "@heroui/react";

type DestinationInfoButtonProps = Pick<TravelDestination, "persianDestination">;

export default function DestinationInfoButton({
  persianDestination,
}: DestinationInfoButtonProps) {
  const setDestination = useFlightSearch((state) => state.setDestination);
  return (
    <Button
      onPress={() => setDestination(persianDestination)}
      className="rounded-lg border border-white bg-transparent p-2 font-light"
    >
      خرید بلیط پروازهای {persianDestination}
    </Button>
  );
}
