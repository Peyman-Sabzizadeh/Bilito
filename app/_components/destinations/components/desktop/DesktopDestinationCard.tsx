import Image from "next/image";
import DestinationInfo from "../DestinationInfo";
import type { TravelDestination } from "@/_data/travelDestinations";

type DesktopDestinationCardProps = {
  item: TravelDestination;
  orientation: "vertical" | "horizontal";
};

export default function DesktopDestinationCard({
  item,
  orientation,
}: DesktopDestinationCardProps) {
  return (
    <div className="relative">
      <Image
        src={`/destinations/desktop/${item.destination}.png`}
        alt={item.destination}
        width={392}
        height={orientation === "vertical" ? 328 : 152}
        loading="lazy"
      />
      <DestinationInfo
        persianDestination={item.persianDestination}
        title={item.title}
      />
    </div>
  );
}
