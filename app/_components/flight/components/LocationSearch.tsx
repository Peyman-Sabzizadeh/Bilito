"use client";

import LocationListBox from "./LocationListBox";
import LocationSearchField from "./LocationSearchField";
import {
  Autocomplete,
  AutocompleteClearButton,
  AutocompleteFilter,
  AutocompleteIndicator,
  AutocompletePopover,
  AutocompleteTrigger,
  AutocompleteValue,
  useFilter,
} from "@heroui/react";
import { useFlightSearch } from "@/_store/flightSearchStore";

type LocationSearchProps = {
  location: "origin" | "destination";
};

export default function LocationSearch({ location }: LocationSearchProps) {
  const selectedKey = useFlightSearch((state) =>
    location === "origin" ? state.origin : state.destination,
  );
  const setSelectedKey = useFlightSearch((state) =>
    location === "origin" ? state.setOrigin : state.setDestination,
  );
  const { contains } = useFilter({ sensitivity: "base" });
  return (
    <Autocomplete
      aria-label="Location Search"
      placeholder={location === "origin" ? "مبدا" : "مقصد"}
      value={selectedKey}
      onChange={(value) => setSelectedKey(value?.toString() ?? null)}
      className="flex-1"
    >
      <AutocompleteTrigger className="border-gray-3 flex h-14 items-center rounded-lg border py-2 shadow-none md:h-12">
        <AutocompleteValue className="text-gray-8" />
        <AutocompleteClearButton className="md:-left-4" />
        <AutocompleteIndicator className="text-gray-8 md:hidden" />
      </AutocompleteTrigger>
      <AutocompletePopover placement="top" className="h-80 w-60">
        <AutocompleteFilter filter={contains}>
          <LocationSearchField />
          <LocationListBox />
        </AutocompleteFilter>
      </AutocompletePopover>
    </Autocomplete>
  );
}
