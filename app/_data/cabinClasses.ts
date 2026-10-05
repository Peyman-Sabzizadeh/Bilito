export const cabinClasses = [
  { value: "economy", label: "اکونومی", description: "Economy" },
  {
    value: "premium-economy",
    label: "پریمیوم اکونومی",
    description: "Premium Economy",
  },
  { value: "comfort", label: "کامفورت", description: "Comfort" },
  { value: "business", label: "بیزنس", description: "Business" },
  {
    value: "premium-business",
    label: "پریمیوم بیزنس",
    description: "Premium Business",
  },
  { value: "first", label: "فرست", description: "First" },
  {
    value: "premium-first",
    label: "پریمیوم فرست",
    description: "Premium First",
  },
] as const;

export type CabinClassValue = (typeof cabinClasses)[number]["value"];
