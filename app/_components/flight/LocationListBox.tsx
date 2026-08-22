import { allCities } from "@/_data/allCities";
import {
  Description,
  Label,
  ListBox,
  ListBoxItem,
  ListBoxItemIndicator,
} from "@heroui/react";

export default function LocationListBox() {
  return (
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
  );
}
