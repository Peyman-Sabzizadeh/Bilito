"use client";

import { useState } from "react";
import { Calendar, DateField, DatePicker, DateValue } from "@heroui/react";
import { ChevronDown } from "lucide-react";

export default function FlightDatePicker() {
  const [date, setDate] = useState<DateValue | null>(null);
  return (
    <DatePicker value={date} onChange={setDate} aria-label="Flight date picker">
      <DateField.Group className="border-gray-3 h-14 rounded-lg border px-1 shadow-none active:border-none md:w-35">
        {!date ? (
          <div className="text-gray-8 mr-2 w-full max-md:font-medium">
            تاریخ رفت
          </div>
        ) : (
          <DateField.Input className="*:text-gray-8">
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        )}
        <DateField.Suffix className="md:hidden">
          <DatePicker.Trigger>
            <DatePicker.TriggerIndicator className="text-gray-8 size-5">
              <ChevronDown size={18} />
            </DatePicker.TriggerIndicator>
          </DatePicker.Trigger>
        </DateField.Suffix>
      </DateField.Group>
      <DatePicker.Popover className="max-w-none">
        <Calendar className="ml-13" aria-label="Flight date">
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
  );
}
