import { useFlightSearch } from "@/_store/flightSearchStore";
import PassengerNumberField from "./PassengerNumberField";
import { passengerTypes } from "@/_data/passengerTypes";

export default function PassengerFields() {
  const passengers = useFlightSearch((state) => state.passengers);
  const setPassengers = useFlightSearch((state) => state.setPassengers);
  return (
    <div className="flex w-64 flex-col gap-3 py-1">
      {passengerTypes.map(({ label, description, maxValue, type }) => (
        <PassengerNumberField
          key={type}
          label={label}
          description={description}
          maxValue={maxValue}
          value={passengers[type]}
          onChange={(value) => setPassengers({ [type]: value })}
        />
      ))}
    </div>
  );
}
