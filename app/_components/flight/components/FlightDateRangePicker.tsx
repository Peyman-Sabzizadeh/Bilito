"use client";

import { useRef, useState } from "react";
import {
  DateField,
  DateRangePicker,
  DateValue,
  RangeCalendar,
  RangeValue,
} from "@heroui/react";
import { CalendarDaysIcon, ChevronDown } from "lucide-react";

export default function FlightDateRangePicker() {
  const [rangeDate, setRangeDate] = useState<RangeValue<DateValue> | null>(
    null,
  );
  const triggerRef = useRef<HTMLButtonElement>(null);
  return (
    <DateRangePicker
      value={rangeDate}
      onChange={setRangeDate}
      endName="endDate"
      startName="startDate"
      aria-label="Flight date range picker"
    >
      <DateField.Group
        onClick={() => {
          if (rangeDate) {
            return null;
          } else {
            triggerRef.current?.click();
          }
        }}
        className="border-gray-3 h-14 cursor-pointer rounded-lg border px-1 shadow-none active:border-none md:w-fit"
      >
        {!rangeDate ? (
          <div className="text-gray-8 mr-2 w-full max-md:font-medium">
            تاریخ رفت و برگشت
          </div>
        ) : (
          <>
            <DateField.Input slot="start" className="*:text-gray-8">
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
            <DateRangePicker.RangeSeparator />
            <DateField.Input slot="end" className="*:text-gray-8">
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
          </>
        )}
        <DateField.Suffix>
          <DateRangePicker.Trigger ref={triggerRef}>
            <DateRangePicker.TriggerIndicator className="text-gray-8 size-5">
              <ChevronDown size={18} className="md:hidden" />
              {rangeDate ? (
                <CalendarDaysIcon
                  size={16}
                  className="cursor-pointer max-md:hidden"
                />
              ) : null}
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
