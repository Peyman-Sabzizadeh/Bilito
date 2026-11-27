"use client";

import { useCabinClasses } from "@/_store/cabinClassStore";
import useFlightResults from "../_hooks/useFlightResults";
import { useEffect } from "react";
import {
  CalendarDaysIcon,
  CalendarRange,
  Edit,
  Plane,
  Ticket,
  UserPlus2,
} from "lucide-react";
import { Tooltip } from "@heroui/react";

export default function FlightSearchInfo() {
  const { searchValues } = useFlightResults();
  const { fetchCabinClasses, cabinClasses, isFetched } = useCabinClasses();

  useEffect(() => {
    if (!isFetched) fetchCabinClasses();
  }, [fetchCabinClasses, isFetched]);

  const {
    from,
    to,
    departureDate,
    returnDate,
    adult,
    child,
    infant,
    cabinClass,
  } = searchValues;
  const passengers = adult + child + infant;

  const cabinClassLabel = cabinClasses.find(
    (item) => item.value === cabinClass,
  )?.class;

  const formatter = new Intl.DateTimeFormat("fa-IR-u-nu-latn", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  });
  const departureParsed = new Date(departureDate ?? "");
  const returnParsed = new Date(returnDate ?? "");
  const departureDateFa = Number.isNaN(departureParsed.getTime())
    ? "—"
    : formatter.format(departureParsed);
  const returnDateFa = Number.isNaN(returnParsed.getTime())
    ? "—"
    : formatter.format(returnParsed);

  return (
    <div className="md:text-gray-8 text-gray-9 -mt-5 flex items-center rounded-lg bg-white px-4 py-3 text-xs shadow-lg max-md:w-full max-md:justify-between max-md:font-medium md:-mt-9 md:gap-8 md:p-6 md:text-sm md:font-semibold">
      <div className="flex items-center gap-2.5 md:gap-8">
        <span className="flex items-center gap-1">
          <span className="flex items-center gap-1.5 max-md:hidden">
            <Plane className="size-4.5 -rotate-135" />
            بلیت هواپیما
          </span>
          <span>
            {from} به {to}
          </span>
        </span>
        <span className="flex md:gap-1.5">
          {returnDate ? (
            <CalendarRange className="size-4.5 max-md:hidden" />
          ) : (
            <CalendarDaysIcon className="size-4.5 max-md:hidden" />
          )}
          <span>{departureDateFa}</span>
          {returnDate && <span> ، {returnDateFa}</span>}
        </span>
        <span className="flex md:gap-1.5">
          <UserPlus2 className="size-4.5 max-md:hidden" />
          <span>{passengers} مسافر</span>
        </span>
        <span className="flex md:gap-1.5">
          <Ticket className="size-4.5 max-md:hidden" />
          <span>{cabinClassLabel}</span>
        </span>
      </div>
      <Tooltip delay={0}>
        <Tooltip.Trigger className="max-md:h-4.5">
          <button className="md:bg-primary cursor-pointer md:rounded-lg md:px-3 md:py-2">
            <Edit
              className="text-primary size-4.5 md:text-white"
              strokeWidth={1.5}
            />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content showArrow placement="top">
          <Tooltip.Arrow />
          <p className="text-gray-7 font-medium">ویرایش اطلاعات</p>
        </Tooltip.Content>
      </Tooltip>
    </div>
  );
}
