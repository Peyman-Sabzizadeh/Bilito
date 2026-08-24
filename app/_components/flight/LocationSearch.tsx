"use client";

import { useState } from "react";
import type { Key } from "@heroui/react";
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

type LocationSearchProps = {
  type: string;
};

export default function LocationSearch({ type }: LocationSearchProps) {
  const [selectedKey, setSelectedKey] = useState<Key | null>(null);
  const { contains } = useFilter({ sensitivity: "base" });
  return (
    <Autocomplete
      aria-label="Location Search"
      placeholder={type}
      value={selectedKey}
      onChange={setSelectedKey}
    >
      <AutocompleteTrigger className="border-gray-3 mt-6 flex h-14 items-center rounded-lg border py-2 shadow-none md:mt-8 md:w-35">
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
