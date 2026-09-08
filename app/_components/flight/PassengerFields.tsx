import PassengerNumberField from "./PassengerNumberField";

export default function PassengerFields() {
  return (
    <div className="flex flex-col gap-4 py-1 w-64">
      <PassengerNumberField
        label="بزرگسال"
        description="بزرگتر از 12 سال"
        maxValue={9}
      />
      <PassengerNumberField
        label="کودک"
        description="بین 2 تا 12 سال"
        maxValue={3}
      />
      <PassengerNumberField
        label="نوزاد"
        description="کوچکتر از 2 سال"
        maxValue={1}
      />
    </div>
  );
}
