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
          <PassengerNumberField
            label="بزرگسال"
            description="بزرگتر از 12 سال"
            maxValue={9}
          />
          <PassengerNumberField
            label="کودک"
            description="بین 2 تا 12 سال"
            maxValue={3}
          />
          <PassengerNumberField
            label="نوزاد"
            description="کوچکتر از 2 سال"
            maxValue={1}
          />
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  );
}
