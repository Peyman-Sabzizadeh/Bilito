import { Popover } from "@heroui/react";

export default function PassengerSelector() {
  return (
    <Popover>
      <Popover.Trigger>تعداد مسافر</Popover.Trigger>
      <Popover.Content>
        <Popover.Dialog>Passenger Selectors</Popover.Dialog>
      </Popover.Content>
    </Popover>
  );
}
