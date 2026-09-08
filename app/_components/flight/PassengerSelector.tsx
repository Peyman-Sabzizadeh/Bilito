import { Popover } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import PassengerNumberField from "./PassengerNumberField";

export default function PassengerSelector() {
  return (
    <Popover>
      <Popover.Trigger>
        <div className="border-gray-3 text-gray-8 flex h-14 cursor-pointer items-center justify-between rounded-lg border px-3 text-sm max-md:font-medium md:w-35">
          <span>تعداد مسافر</span>
          <ChevronDown size={18} className="md:hidden" />
        </div>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Dialog>
          <PassengerNumberField />
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  );
}
