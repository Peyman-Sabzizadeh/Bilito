import Image from "next/image";
import DestinationInfo from "../DestinationInfo";
import type { TravelDestination } from "@/_data/travelDestinations";

export default function MobileDestinationCard({
  item,
}: {
  item: TravelDestination;
}) {
  return (
    <>
      <Image
        src={`/destinations/mobile/${item.destination}.png`}
        alt={item.destination}
        width={236}
        height={156}
      />
      <DestinationInfo
        persianDestination={item.persianDestination}
        title={item.title}
      />
    </>
  );
}
