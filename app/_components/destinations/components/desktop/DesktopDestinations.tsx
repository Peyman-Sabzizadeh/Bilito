import { travelDestinations } from "@/_data/travelDestinations";
import DesktopDestinationCard from "./DesktopDestinationCard";

export default function DesktopDestinations() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex *:w-full *:flex-1 gap-6">
        {travelDestinations.slice(0, 2).map((item) => (
          <DesktopDestinationCard
            key={item.persianDestination}
            item={item}
            orientation="vertical"
          />
        ))}
      </div>
      <div className="flex flex-col *:w-full *:flex-1 gap-6">
        {travelDestinations.slice(2, 4).map((item) => (
          <DesktopDestinationCard
            key={item.persianDestination}
            item={item}
            orientation="horizontal"
          />
        ))}
      </div>
    </div>
  );
}
