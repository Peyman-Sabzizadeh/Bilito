"use client";

import { useState } from "react";
import type { Key } from "@heroui/react";
import { allCities } from "@/_data/allCities";
import {
  Autocomplete,
  Description,
  EmptyState,
  Header,
  Label,
  ListBox,
  SearchField,
  useFilter,
} from "@heroui/react";

export function LocationSearch() {
  const continents = [...new Set(allCities.map((city) => city.continent))];

  const [selectedKey, setSelectedKey] = useState<Key | null>(null);
  const { contains } = useFilter({ sensitivity: "base" });
  
  const customFilter = (text: string, inputValue: string) => {
    if (!inputValue) return true;
    return contains(text, inputValue);
  };

  return (
    <Autocomplete
      className="w-[256px]"
      placeholder="Search for a city"
      selectionMode="single"
      value={selectedKey}
      onChange={setSelectedKey}
    >
      <Label>City</Label>
      <Autocomplete.Trigger>
        <Autocomplete.Value />
        <Autocomplete.ClearButton />
        <Autocomplete.Indicator />
      </Autocomplete.Trigger>
      <Autocomplete.Popover>
        <Autocomplete.Filter filter={customFilter}>
          <SearchField autoFocus name="search" variant="secondary">
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input placeholder="Search cities..." />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
          <ListBox
            renderEmptyState={() => <EmptyState>No cities found</EmptyState>}
          >
            {continents.map((continent) => (
              <ListBox.Section key={continent}>
                <Header>{continent}</Header>
                {allCities
                  .filter((city) => city.continent === continent)
                  .map((city) => (
                    <ListBox.Item
                      key={city.name}
                      id={city.name}
                      textValue={city.name}
                    >
                      <div className="flex flex-col">
                        <Label>{city.name}</Label>
                        <Description>{city.country}</Description>
                      </div>
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
              </ListBox.Section>
            ))}
          </ListBox>
        </Autocomplete.Filter>
      </Autocomplete.Popover>
    </Autocomplete>
  );
}
