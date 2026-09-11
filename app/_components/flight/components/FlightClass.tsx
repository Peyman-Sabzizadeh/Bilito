import { ListBox, Select } from "@heroui/react";

export default function FlightClass() {
  return (
    <Select aria-label="Flight class" placeholder="کلاس پرواز">
      <Select.Trigger className="border-gray-3 *:text-gray-8 flex h-14 cursor-pointer items-center justify-between rounded-lg border *:text-sm *:max-md:font-medium md:w-35">
        <Select.Value />
        <Select.Indicator className="ml-1 md:hidden" />
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
