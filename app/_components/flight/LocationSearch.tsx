"use client";

import { useState } from "react";
import type { Key } from "@heroui/react";
import {
  Autocomplete,
  AutocompleteClearButton,
  AutocompleteFilter,
  AutocompleteIndicator,
  AutocompletePopover,
  AutocompleteTrigger,
  AutocompleteValue,
  SearchField,
  SearchFieldClearButton,
  SearchFieldGroup,
  SearchFieldInput,
  SearchFieldSearchIcon,
  useFilter,
} from "@heroui/react";
import LocationListBox from "./LocationListBox";

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
          <SearchField autoFocus name="search" aria-label="Search Field">
            <SearchFieldGroup>
              <SearchFieldSearchIcon />
              <SearchFieldInput placeholder="جستجوی شهر..." />
              <SearchFieldClearButton />
            </SearchFieldGroup>
          </SearchField>
          <LocationListBox />
        </AutocompleteFilter>
      </AutocompletePopover>
    </Autocomplete>
  );
}
