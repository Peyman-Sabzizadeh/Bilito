import { Separator } from "@heroui/react";
import Container from "../Container";
import FlightType from "./components/FlightType";
import TripType from "./components/TripType";
import LocationSearch from "./components/LocationSearch";
import SwitchLocationButton from "./components/SwitchLocationButton";
import FlightDatePicker from "./components/FlightDatePicker";
import FlightDateRangePicker from "./components/FlightDateRangePicker";
import PassengerSelector from "./components/PassengerSelector";
import CabinClass from "./components/CabinClass";
import SearchButton from "./components/SearchButton";

export default function FlightSearch() {
  return (
    <Container>
      <div className="md:border-gray-2 relative md:-mt-35 md:rounded-lg md:border md:bg-white md:p-6 md:shadow-lg">
        <FlightType />
        <Separator className="-mt-0.5 h-0.5" />
        <TripType />
        <div className="flex w-full flex-col items-center gap-4 pt-6 md:flex-row md:pt-8">
          <div className="flex w-full flex-2 flex-col gap-4 md:flex-row md:items-center md:gap-1">
            <LocationSearch location="origin" />
            <SwitchLocationButton />
            <LocationSearch location="destination" />
          </div>
          <FlightDatePicker />
          <FlightDateRangePicker />
          <PassengerSelector />
          <CabinClass />
          <SearchButton />
        </div>
      </div>
    </Container>
  );
}
