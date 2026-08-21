"use client";

import { useState } from "react";
import type { Key } from "@heroui/react";
import { allCities } from "@/_data/allCities";
import {
  Autocomplete,
  AutocompleteClearButton,
  AutocompleteFilter,
  AutocompleteIndicator,
  AutocompletePopover,
  AutocompleteTrigger,
  AutocompleteValue,
  Description,
  Label,
  ListBox,
  ListBoxItem,
  ListBoxItemIndicator,
  SearchField,
  SearchFieldClearButton,
  SearchFieldGroup,
  SearchFieldInput,
  SearchFieldSearchIcon,
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
          <SearchField autoFocus name="search" aria-label="Search Field">
            <SearchFieldGroup>
              <SearchFieldSearchIcon />
              <SearchFieldInput placeholder="جستجوی شهر..." />
              <SearchFieldClearButton />
            </SearchFieldGroup>
          </SearchField>
          <ListBox>
            {allCities.map((city) => (
              <ListBoxItem
                key={city.name}
                id={city.name}
                textValue={city.name}
                aria-label={city.name}
              >
                <div className="flex flex-col">
                  <Label>{city.name}</Label>
                  <Description>{city.country}</Description>
                </div>
                <ListBoxItemIndicator />
              </ListBoxItem>
            ))}
          </ListBox>
        </AutocompleteFilter>
      </AutocompletePopover>
    </Autocomplete>
  );
}
