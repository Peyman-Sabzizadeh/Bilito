import type { TravelDestination } from "@/_data/travelDestinations";
import Image from "next/image";
import DestinationInfo from "./DestinationInfo";

type DestinationCardProps = {
  item: TravelDestination;
  device: "mobile" | "desktop";
  orientation?: "vertical" | "horizontal";
};

export default function DestinationCard({
  item,
  device,
  orientation,
}: DestinationCardProps) {
  return (
    <div className="relative">
      <Image
        src={`/destinations/${device}/${item.src}`}
        alt={item.persianDestination}
        width={device === "desktop" ? 392 : 236}
        height={
          device === "desktop" ? (orientation === "vertical" ? 328 : 152) : 156
        }
        loading="lazy"
      />
      <DestinationInfo
        persianDestination={item.persianDestination}
        title={item.title}
      />
    </div>
  );
}
