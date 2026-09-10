import { Separator } from "@heroui/react";
import Container from "../Container";
import FlightType from "./components/FlightType";
import TripType from "./components/TripType";
import LocationSearch from "./components/LocationSearch";
import SwitchLocationButton from "./components/SwitchLocationButton";
import FlightDatePicker from "./components/FlightDatePicker";
import FlightDateRangePicker from "./components/FlightDateRangePicker";
import PassengerSelector from "./components/PassengerSelector";
import FlightClass from "./components/FlightClass";

export default function SearchFlight() {
  return (
    <Container>
      <div className="md:border-gray-2 md:rounded-lg md:border md:p-6 md:shadow-lg">
        <FlightType />
        <Separator className="-mt-0.5 h-0.5" />
        <TripType />
        <div className="flex flex-col gap-4 pt-6 md:flex-row md:gap-4 md:pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-1">
            <LocationSearch type="مبدا" />
            <SwitchLocationButton />
            <LocationSearch type="مقصد" />
          </div>
          <FlightDatePicker />
          <FlightDateRangePicker />
          <PassengerSelector />
          <FlightClass />
        </div>
      </div>
    </Container>
  );
}
