import { useFlightSearch } from "@/_store/flightSearchStore";

export default function useFlightSearchSubmit() {
  const handleSearchSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
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
    const totalPassengers =
      passengers.adult + passengers.child + passengers.infant;
    const hasDate = isOneWay ? Boolean(departureDate) : Boolean(rangeDate);
    if (
      !origin ||
      !destination ||
      !hasDate ||
      !totalPassengers ||
      !cabinClass
    ) {
      return;
    }
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
