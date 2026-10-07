"use client";

import { useFlightSearch } from "@/_store/flightSearchStore";
import FlightType from "./components/FlightType";
import { Separator } from "@heroui/react";
import TripType from "./components/TripType";
import LocationSearch from "./components/LocationSearch";
import SwitchLocationButton from "./components/SwitchLocationButton";
import FlightDatePicker from "./components/FlightDatePicker";
import FlightDateRangePicker from "./components/FlightDateRangePicker";
import PassengerSelector from "./components/PassengerSelector";
import CabinClass from "./components/CabinClass";
import SearchButton from "./components/SearchButton";

export default function FlightSearchForm() {
  const handleSearchSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {
      flightType,
      tripType,
      origin,
      destination,
      departureDate,
      rangeDate,
      passengers,
      cabinClass,
    } = useFlightSearch.getState();
    const isOneWay = tripType === "one-way";
    const payload = {
      flightType,
      tripType,
      origin,
      destination,
      ...(isOneWay ? { departureDate } : { rangeDate }),
      passengers,
      cabinClass,
    };
    console.log("payload: ", payload);
    // send to API when backend is ready
  };

  return (
    <form onSubmit={handleSearchSubmit}>
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
    </form>
  );
}
