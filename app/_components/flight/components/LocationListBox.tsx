import useCities from "@/_hooks/useCities";
import {
  Description,
  Label,
  ListBox,
  ListBoxItem,
  ListBoxItemIndicator,
} from "@heroui/react";

export default function LocationListBox() {
  const { cities } = useCities();

  return (
    <ListBox>
      {cities.map((city) => (
        <ListBoxItem
          key={city.id}
          id={city.name}
          textValue={city.name}
          aria-label={city.name}
        >
          <div className="flex flex-col *:whitespace-nowrap">
            <Label>{city.name}</Label>
            <Description>{city.country}</Description>
          </div>
          <ListBoxItemIndicator />
        </ListBoxItem>
      ))}
    </ListBox>
  );
}
