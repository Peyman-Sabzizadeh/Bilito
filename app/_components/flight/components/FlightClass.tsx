import { ListBox, Select } from "@heroui/react";

export default function FlightClass() {
  return (
    <Select aria-label="Flight class">
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox aria-label="Flight class items">
          <ListBox.Item id="economy" textValue="Economy">
            Economy
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="business" textValue="Business">
            Business
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="first" textValue="First">
            First
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
  );
}
