"use client";

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
import useFlightSearchSubmit from "@/_hooks/useFlightSearchSubmit";
import { useState } from "react";

export default function FlightSearchForm() {
  const { handleSearchSubmit } = useFlightSearchSubmit();
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    setSubmitAttempted(true);
    handleSearchSubmit(event);
  };
  return (
    <form onSubmit={onSubmit}>
      <FlightType />
      <Separator className="-mt-0.5 h-0.5" />
      <TripType />
      <div className="flex w-full flex-col items-center gap-4 pt-6 md:flex-row md:pt-8">
        <div className="flex w-full flex-2 flex-col gap-4 md:flex-row md:items-center md:gap-1">
          <LocationSearch location="مبدا" submitAttempted={submitAttempted} />
          <SwitchLocationButton />
          <LocationSearch location="مقصد" submitAttempted={submitAttempted} />
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
