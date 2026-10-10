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
  FieldError,
  useFilter,
} from "@heroui/react";
import { useFlightSearch } from "@/_store/flightSearchStore";

type LocationSearchProps = {
  location: "مبدا" | "مقصد";
  submitAttempted: boolean;
};

export default function LocationSearch({
  location,
  submitAttempted,
}: LocationSearchProps) {
  const selectedKey = useFlightSearch((state) =>
    location === "مبدا" ? state.origin : state.destination,
  );
  const setSelectedKey = useFlightSearch((state) =>
    location === "مبدا" ? state.setOrigin : state.setDestination,
  );
  const otherKey = useFlightSearch((state) =>
    location === "مبدا" ? state.destination : state.origin,
  );
  const { contains } = useFilter({ sensitivity: "base" });
  const isInvalid = !selectedKey && submitAttempted;
  return (
    <Autocomplete
      aria-label="Location Search"
      placeholder={location}
      value={selectedKey}
      onChange={(value) => setSelectedKey(value as typeof selectedKey)}
      disabledKeys={otherKey ? [otherKey] : []}
      className="flex-1"
      isInvalid={isInvalid}
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
      <div className="relative">
        <FieldError className="absolute inset-s-0 top-full md:mt-1 text-xs">
          لطفا {location} را انتخاب کنید
        </FieldError>
      </div>
    </Autocomplete>
  );
}
