"use client";

import { useRef, useState } from "react";
import {
  DateField,
  DateRangePicker,
  DateValue,
  RangeCalendar,
  RangeValue,
} from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { toJalaali } from "jalaali-js";

export default function FlightDateRangePicker() {
  const [rangeDate, setRangeDate] = useState<RangeValue<DateValue> | null>(
    null,
  );
  const startPersisanDate = rangeDate
    ? toJalaali(
        rangeDate.start.year,
        rangeDate.start.month,
        rangeDate.start.day,
      )
    : null;
  const endPersisanDate = rangeDate
    ? toJalaali(rangeDate.end.year, rangeDate.end.month, rangeDate.end.day)
    : null;
  const triggerRef = useRef<HTMLButtonElement>(null);
  return (
    <DateRangePicker
      value={rangeDate}
      onChange={setRangeDate}
      endName="endDate"
      startName="startDate"
      aria-label="Flight date range picker"
      className="w-full flex-2"
    >
      <DateField.Group
        onClick={() => triggerRef.current?.click()}
        className="border-gray-3 h-14 cursor-pointer justify-between rounded-lg border px-1 shadow-none md:h-12"
      >
        {!rangeDate ? (
          <div className="text-gray-8 mr-2 w-full max-md:font-medium">
            تاریخ رفت و برگشت
          </div>
        ) : (
          <div className="flex gap-2 pr-2">
            <div className="text-gray-8 max-md:font-medium" dir="ltr">
              {`${startPersisanDate?.jy} / ${String(
                startPersisanDate?.jm,
              ).padStart(
                2,
                "0",
              )} / ${String(startPersisanDate?.jd).padStart(2, "0")}`}
            </div>
            <DateRangePicker.RangeSeparator />
            <div className="text-gray-8 max-md:font-medium" dir="ltr">
              {`${endPersisanDate?.jy} / ${String(endPersisanDate?.jm).padStart(
                2,
                "0",
              )} / ${String(endPersisanDate?.jd).padStart(2, "0")}`}
            </div>
          </div>
        )}
        <DateField.Suffix>
          <DateRangePicker.Trigger ref={triggerRef}>
            <DateRangePicker.TriggerIndicator className="text-gray-8 size-5">
              <ChevronDown size={18} className="md:hidden" />
            </DateRangePicker.TriggerIndicator>
          </DateRangePicker.Trigger>
        </DateField.Suffix>
      </DateField.Group>
      <DateRangePicker.Popover className="w-80 max-w-none">
        <RangeCalendar aria-label="Trip dates" className="w-auto max-w-none">
          <RangeCalendar.Header>
            <RangeCalendar.YearPickerTrigger>
              <RangeCalendar.YearPickerTriggerHeading />
              <RangeCalendar.YearPickerTriggerIndicator />
            </RangeCalendar.YearPickerTrigger>
            <RangeCalendar.NavButton slot="previous" />
            <RangeCalendar.NavButton slot="next" />
          </RangeCalendar.Header>
          <RangeCalendar.Grid>
            <RangeCalendar.GridHeader>
              {(day) => (
                <RangeCalendar.HeaderCell>{day}</RangeCalendar.HeaderCell>
              )}
            </RangeCalendar.GridHeader>
            <RangeCalendar.GridBody>
              {(date) => <RangeCalendar.Cell date={date} />}
            </RangeCalendar.GridBody>
          </RangeCalendar.Grid>
          <RangeCalendar.YearPickerGrid>
            <RangeCalendar.YearPickerGridBody>
              {({ year }) => <RangeCalendar.YearPickerCell year={year} />}
            </RangeCalendar.YearPickerGridBody>
          </RangeCalendar.YearPickerGrid>
        </RangeCalendar>
      </DateRangePicker.Popover>
    </DateRangePicker>
  );
}
