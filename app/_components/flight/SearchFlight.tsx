import { Separator } from "@heroui/react";
import Container from "../Container";
import FlightType from "./FlightType";
import TripType from "./TripType";
import LocationSearch from "./LocationSearch";

export default function SearchFlight() {
  return (
    <Container>
      <div className="md:border-gray-2 md:rounded-lg md:border md:p-6 md:shadow-lg">
        <FlightType />
        <Separator className="-mt-0.5 h-0.5" />
        <TripType />
        <LocationSearch type="مبدا"/>
      </div>
    </Container>
  );
}
