import { useFlightSearch } from "@/_store/flightSearchStore";
import PassengerNumberField from "./PassengerNumberField";

export default function PassengerFields() {
  const passengers = useFlightSearch((state) => state.passengers);
  const setPassengers = useFlightSearch((state) => state.setPassengers);
  return (
    <div className="flex w-64 flex-col gap-3 py-1">
      <PassengerNumberField
        label="بزرگسال"
        description="بزرگتر از 12 سال"
        maxValue={9}
        value={passengers.adult}
        onChange={(value) => setPassengers({ adult: value })}
      />
      <PassengerNumberField
        label="کودک"
        description="بین 2 تا 12 سال"
        maxValue={3}
        value={passengers.child}
        onChange={(value) => setPassengers({ child: value })}
      />
      <PassengerNumberField
        label="نوزاد"
        description="کوچکتر از 2 سال"
        maxValue={1}
        value={passengers.infant}
        onChange={(value) => setPassengers({ infant: value })}
      />
    </div>
  );
}
