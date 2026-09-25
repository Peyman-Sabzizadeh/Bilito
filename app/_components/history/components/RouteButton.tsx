import { useFlightSearch } from "@/_store/flightSearchStore";
import { scrollToTop } from "@/_utils/scrollToTop";
import { Button } from "@heroui/react";

type RouteButtonProps = {
  item: {
    id: number;
    from: string;
    to: string;
  };
};

export default function RouteButton({ item }: RouteButtonProps) {
  const setOrigin = useFlightSearch((state) => state.setOrigin);
  const setDestination = useFlightSearch((state) => state.setDestination);
  return (
    <Button
      onPress={() => {
        setOrigin(item.from);
        setDestination(item.to);
        scrollToTop();
      }}
      className="text-gray-7 size-auto bg-transparent p-0 text-xs font-medium select-none"
    >
      {item.from} به {item.to}
    </Button>
  );
}
