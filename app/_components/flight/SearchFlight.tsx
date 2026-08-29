import { Separator } from "@heroui/react";
import Container from "../Container";
import FlightType from "./FlightType";
import TripType from "./TripType";
import LocationSearch from "./LocationSearch";
import SwitchLocationButton from "./SwitchLocationButton";
import FlightDatePicker from "./FlightDatePicker";
import FlightDateRangePicker from "./FlightDateRangePicker";

export default function SearchFlight() {
  return (
    <Container>
      <div className="md:border-gray-2 md:rounded-lg md:border md:p-6 md:shadow-lg">
        <FlightType />
        <Separator className="-mt-0.5 h-0.5" />
        <TripType />
        <div className="flex flex-col items-center gap-4 pt-6 md:flex-row md:gap-4 md:pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-1">
            <LocationSearch type="مبدا" />
            <SwitchLocationButton />
            <LocationSearch type="مقصد" />
          </div>
          <FlightDatePicker />
          <FlightDateRangePicker />
        </div>
      </div>
    </Container>
  );
}
