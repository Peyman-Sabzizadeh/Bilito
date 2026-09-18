"use client";

import { useFlightSearch } from "@/_store/flightSearchStore";
import { Calendar, DateField, DatePicker, I18nProvider } from "@heroui/react";
import { toJalaali } from "jalaali-js";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function FlightDatePicker() {
  const departureDate = useFlightSearch((state) => state.departureDate);
  const setDepartureDate = useFlightSearch((state) => state.setDepartureDate);
  const persianDate = departureDate
    ? toJalaali(departureDate.year, departureDate.month, departureDate.day)
    : null;
  const triggerRef = useRef<HTMLButtonElement>(null);
  return (
    <I18nProvider locale="fa-IR-u-ca-persian">
      <DatePicker
        value={departureDate}
        onChange={setDepartureDate}
        aria-label="Flight date picker"
        className="w-full flex-1"
      >
        <DateField.Group
          onClick={() => triggerRef.current?.click()}
          className="border-gray-3 h-14 cursor-pointer justify-between rounded-lg border px-1 shadow-none md:h-12"
        >
          {!departureDate ? (
            <div className="text-gray-8 mr-2 w-full max-md:font-medium">
              تاریخ رفت
            </div>
          ) : (
            <div className="text-gray-8 mr-2 max-md:font-medium" dir="ltr">
              {`${persianDate?.jy} / ${String(persianDate?.jm).padStart(
                2,
                "0",
              )} / ${String(persianDate?.jd).padStart(2, "0")}`}
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
        <DatePicker.Popover className="w-82 max-w-none">
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
