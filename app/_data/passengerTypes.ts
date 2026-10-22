export const passengerTypes = [
  {
    type: "adult",
    label: "بزرگسال",
    description: "بزرگتر از 12 سال",
    maxValue: 9,
  },
  {
    type: "child",
    label: "کودک",
    description: "بین 2 تا 12 سال",
    maxValue: 3,
  },
  {
    type: "infant",
    label: "نوزاد",
    description: "کوچکتر از 2 سال",
    maxValue: 1,
  },
] as const;

export type PassengerType = (typeof passengerTypes)[number]["type"];