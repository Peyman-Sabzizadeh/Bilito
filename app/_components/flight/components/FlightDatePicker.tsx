"use client";

import {
  Calendar,
  DateField,
  DatePicker,
  DateValue,
  I18nProvider,
} from "@heroui/react";
import { toJalaali } from "jalaali-js";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

export default function FlightDatePicker() {
  const [date, setDate] = useState<DateValue | null>(null);
  const persisanDate = date ? toJalaali(date.year, date.month, date.day) : null;
  const triggerRef = useRef<HTMLButtonElement>(null);
  return (
    <I18nProvider locale="fa-IR-u-ca-persian">
      <DatePicker
        value={date}
        onChange={setDate}
        aria-label="Flight date picker"
        className="w-full flex-1"
      >
        <DateField.Group
          onClick={() => triggerRef.current?.click()}
          className="border-gray-3 h-14 cursor-pointer justify-between rounded-lg border px-1 shadow-none md:h-12"
        >
          {!date ? (
            <div className="text-gray-8 mr-2 w-full max-md:font-medium">
              تاریخ رفت
            </div>
          ) : (
            <div className="text-gray-8 mr-2 max-md:font-medium" dir="ltr">
              {`${persisanDate?.jy} / ${String(persisanDate?.jm).padStart(
                2,
                "0",
              )} / ${String(persisanDate?.jd).padStart(2, "0")}`}
            </div>
          )}
          <DateField.Suffix>
            <DatePicker.Trigger ref={triggerRef}>
              <DatePicker.TriggerIndicator className="text-gray-8 size-5">
                <ChevronDown size={18} className="md:hidden" />
              </DatePicker.TriggerIndicator>
            </DatePicker.Trigger>
          </DateField.Suffix>
        </DateField.Group>
        <DatePicker.Popover className="w-80 max-w-none">
          <Calendar aria-label="Flight date" className="w-auto max-w-none">
            <Calendar.Header>
              <Calendar.YearPickerTrigger>
                <Calendar.YearPickerTriggerHeading />
                <Calendar.YearPickerTriggerIndicator />
              </Calendar.YearPickerTrigger>
              <Calendar.NavButton slot="next" />
              <Calendar.NavButton slot="previous" />
            </Calendar.Header>
            <Calendar.Grid>
              <Calendar.GridHeader>
                {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
              </Calendar.GridHeader>
              <Calendar.GridBody>
                {(date) => <Calendar.Cell date={date} />}
              </Calendar.GridBody>
            </Calendar.Grid>
            <Calendar.YearPickerGrid>
              <Calendar.YearPickerGridBody>
                {({ year }) => <Calendar.YearPickerCell year={year} />}
              </Calendar.YearPickerGridBody>
            </Calendar.YearPickerGrid>
          </Calendar>
        </DatePicker.Popover>
      </DatePicker>
    </I18nProvider>
  );
}
