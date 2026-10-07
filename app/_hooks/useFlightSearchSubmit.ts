import { useFlightSearch } from "@/_store/flightSearchStore";

export default function useFlightSearchSubmit() {
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
  return { handleSearchSubmit };
}
