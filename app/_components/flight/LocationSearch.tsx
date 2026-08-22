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
      <AutocompleteTrigger>
        <AutocompleteValue />
        <AutocompleteClearButton />
        <AutocompleteIndicator />
      </AutocompleteTrigger>
      <AutocompletePopover>
        <AutocompleteFilter filter={contains}>
          <LocationSearchField />
          <LocationListBox />
        </AutocompleteFilter>
      </AutocompletePopover>
    </Autocomplete>
  );
}
