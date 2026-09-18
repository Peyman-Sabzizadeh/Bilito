import { create } from "zustand";

type State = {
  flightType: "domestic" | "international";
  tripType: "one-way" | "round-trip" | "multi-city";
  origin: string | null;
  destination: string | null;
  departureDate: string | null;
  returnDate: string | null;
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
  setReturnDate: (newReturnDate: State["returnDate"]) => void;
  setPassengers: (newPassengers: Partial<State["passengers"]>) => void;
  setCabinClass: (newCabinClass: State["cabinClass"]) => void;
};

export const useFlightSearch = create<State & Action>((set) => ({
  flightType: "domestic",
  tripType: "one-way",
  origin: null,
  destination: null,
  departureDate: null,
  returnDate: null,
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
  setReturnDate: (newReturnDate) => set({ returnDate: newReturnDate }),
  setPassengers: (newPassengers) =>
    set((state) => ({
      passengers: {
        ...state.passengers,
        ...newPassengers,
      },
    })),
  setCabinClass: (newCabinClass) => set({ cabinClass: newCabinClass }),
}));
