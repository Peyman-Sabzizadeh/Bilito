import { create } from "zustand";
import { DateValue, RangeValue } from "@heroui/react";

type State = {
  flightType: "domestic" | "international";
  tripType: "one-way" | "round-trip" | "multi-city";
  origin: string | null;
  destination: string | null;
  departureDate: DateValue | null;
  rangeDate: RangeValue<DateValue> | null;
  passengers: {
    adult: number;
    child: number;
    infant: number;
  };
  cabinClass:
    | "economy"
    | "premium-economy"
    | "comfort"
    | "business"
    | "premium-business"
    | "first"
    | "premium-first"
    | null;
};

type Action = {
  setFlightType: (newFlightType: State["flightType"]) => void;
  setTripType: (newTripType: State["tripType"]) => void;
  setOrigin: (newOrigin: State["origin"]) => void;
  setDestination: (newDestination: State["destination"]) => void;
  setDepartureDate: (newDepartureDate: State["departureDate"]) => void;
  setRangeDate: (newRangeDate: State["rangeDate"]) => void;
  setPassengers: (newPassengers: Partial<State["passengers"]>) => void;
  setCabinClass: (newCabinClass: State["cabinClass"]) => void;
};

export const useFlightSearch = create<State & Action>((set) => ({
  flightType: "international",
  tripType: "one-way",
  origin: null,
  destination: null,
  departureDate: null,
  rangeDate: null,
  passengers: {
    adult: 0,
    child: 0,
    infant: 0,
  },
  cabinClass: null,

  setFlightType: (newFlightType) => set({ flightType: newFlightType }),
  setTripType: (newTripType) => set({ tripType: newTripType }),
  setOrigin: (newOrigin) => set({ origin: newOrigin }),
  setDestination: (newDestination) => set({ destination: newDestination }),
  setDepartureDate: (newDepartureDate) =>
    set({ departureDate: newDepartureDate }),
  setRangeDate: (newRangeDate) => set({ rangeDate: newRangeDate }),
  setPassengers: (newPassengers) =>
    set((state) => ({
      passengers: {
        ...state.passengers,
        ...newPassengers,
      },
    })),
  setCabinClass: (newCabinClass) => set({ cabinClass: newCabinClass }),
}));
