import type { TravelDestination } from "@/_data/travelDestinations";
import DestinationInfoButton from "./DestinationInfoButton";

type DestinationInfoProps = Pick<
  TravelDestination,
  "persianDestination" | "title"
>;

export default function DestinationInfo({
  title,
  persianDestination,
}: DestinationInfoProps) {
  return (
    <div className="absolute inset-0 flex flex-col justify-end gap-2 p-4">
      <h3 className="text-lg font-light text-white md:font-bold">{title}</h3>
      <DestinationInfoButton persianDestination={persianDestination} />
    </div>
  );
}
