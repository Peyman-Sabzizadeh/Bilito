export type CabinClassValue =
  | "economy"
  | "premium-economy"
  | "comfort"
  | "business"
  | "premium-business"
  | "first"
  | "premium-first";

export type CabinClass = {
  value: CabinClassValue;
  class: string;
  class_en: string;
};
