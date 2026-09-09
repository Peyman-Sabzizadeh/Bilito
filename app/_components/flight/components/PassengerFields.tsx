import PassengerNumberField from "./PassengerNumberField";
import { Passengers } from "./PassengerSelector";

type PassengerFieldsProp = {
  passengers: Passengers;
  setPassengers: React.Dispatch<React.SetStateAction<Passengers>>;
};

export default function PassengerFields({
  passengers,
  setPassengers,
}: PassengerFieldsProp) {
  return (
    <div className="flex w-64 flex-col gap-3 py-1">
      <PassengerNumberField
        label="بزرگسال"
        description="بزرگتر از 12 سال"
        maxValue={9}
        value={passengers.adult}
        onChange={(value) =>
          setPassengers((prev) => ({
            ...prev,
            adult: value,
          }))
        }
      />
      <PassengerNumberField
        label="کودک"
        description="بین 2 تا 12 سال"
        maxValue={3}
        value={passengers.child}
        onChange={(value) =>
          setPassengers((prev) => ({
            ...prev,
            child: value,
          }))
        }
      />
      <PassengerNumberField
        label="نوزاد"
        description="کوچکتر از 2 سال"
        maxValue={1}
        value={passengers.infant}
        onChange={(value) =>
          setPassengers((prev) => ({
            ...prev,
            infant: value,
          }))
        }
      />
    </div>
  );
}
