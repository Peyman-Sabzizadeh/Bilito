import { travelDestinations } from "@/_data/travelDestinations";
import DestinationCard from "../DestinationCard";

export default function DesktopDestinations() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex gap-6 *:w-full *:flex-1">
        {travelDestinations.slice(0, 2).map((item) => (
          <DestinationCard
            key={item.persianDestination}
            item={item}
            device="desktop"
            orientation="vertical"
          />
        ))}
      </div>
      <div className="flex flex-col gap-6 *:w-full *:flex-1">
        {travelDestinations.slice(2, 4).map((item) => (
          <DestinationCard
            key={item.persianDestination}
            item={item}
            device="desktop"
            orientation="horizontal"
          />
        ))}
      </div>
    </div>
  );
}
