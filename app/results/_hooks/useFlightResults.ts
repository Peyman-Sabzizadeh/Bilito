"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/_utils/supabase/client";
import { useSearchParams } from "next/navigation";
import type { CabinClassValue } from "@/_types/cabinClass";

const FLIGHT_SELECT = `
  id,
  airline_id,
  origin_airport_id,
  destination_airport_id,
  flight_code,
  flight_date,
  departure_time,
  arrival_time,
  duration_minutes,
  is_international,
  trip_type,
  aircraft_type,
  baggage_kg,
  adult_price_toman,
  child_price_toman,
  infant_price_toman,
  available_seats,
  total_seats,
  status,
  cabin_class,
  airline:airlines (
    id,
    name,
    name_en,
    logo_url,
    iata_code
  ),
  origin_airport:airports!flights_origin_airport_id_fkey (
    id,
    name,
    name_en,
    iata_code,
    city:cities!airports_city_id_fkey (
      id,
      name,
      name_en,
      country,
      country_en
    )
  ),
  destination_airport:airports!flights_destination_airport_id_fkey (
    id,
    name,
    name_en,
    iata_code,
    city:cities!airports_city_id_fkey (
      id,
      name,
      name_en,
      country,
      country_en
    )
  )
`;

type SupabaseClient = ReturnType<typeof createClient>;

type FlightLegParams = {
  originAirportIds: number[];
  destinationAirportIds: number[];
  flightDate: string;
  isInternational: boolean;
  cabinClass: CabinClassValue;
  seatsRequired: number;
};

async function fetchFlightLeg(
  supabase: SupabaseClient,
  {
    originAirportIds,
    destinationAirportIds,
    flightDate,
    isInternational,
    cabinClass,
    seatsRequired,
  }: FlightLegParams,
) {
  const { data, error } = await supabase
    .from("flights")
    .select(FLIGHT_SELECT)
    .in("origin_airport_id", originAirportIds)
    .in("destination_airport_id", destinationAirportIds)
    .eq("flight_date", flightDate)
    .eq("is_international", isInternational)
    .eq("cabin_class", cabinClass)
    .eq("status", "scheduled")
    .gte("available_seats", seatsRequired)
    .order("departure_time", { ascending: true });

  if (error) throw error;

  return data ?? [];
}

type FlightSearchRows = Awaited<ReturnType<typeof fetchFlightLeg>>;

export type FlightSearchItem = FlightSearchRows[number];

export default function useFlightResults() {
  const searchParams = useSearchParams();

  const initialSearchValues = {
    flightType: "",
    tripType: "",
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    adult: 0,
    child: 0,
    infant: 0,
    cabinClass: null as CabinClassValue | null,
  };

  const [searchValues, setSearchValues] = useState(initialSearchValues);
  const [outboundFlights, setOutboundFlights] = useState<FlightSearchRows>([]);
  const [returnFlights, setReturnFlights] = useState<FlightSearchRows>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const searchFlights = async () => {
      setIsLoading(true);
      setError(null);
      setOutboundFlights([]);
      setReturnFlights([]);

      try {
        const flightType = searchParams.get("flightType");
        const tripType = searchParams.get("tripType");
        const origin = searchParams.get("from");
        const destination = searchParams.get("to");
        const departureDate = searchParams.get("departureDate");
        const returnDate = searchParams.get("returnDate");
        const cabinClass = searchParams.get(
          "cabinClass",
        ) as CabinClassValue | null;

        const adult = Number(searchParams.get("adult"));
        const child = Number(searchParams.get("child"));
        const infant = Number(searchParams.get("infant"));

        setSearchValues({
          flightType: flightType ?? "",
          tripType: tripType ?? "",
          from: origin ?? "",
          to: destination ?? "",
          departureDate: departureDate ?? "",
          returnDate: returnDate ?? "",
          adult,
          child,
          infant,
          cabinClass,
        });

        const isOneWay = tripType === "one-way";
        const isRoundTrip = tripType === "round-trip";

        if (!isOneWay && !isRoundTrip) {
          throw new Error("نوع سفر پشتیبانی نمی‌شود.");
        }

        if (!origin || !destination || !departureDate || !cabinClass) {
          throw new Error("اطلاعات جستجو کامل نیست.");
        }

        if (origin === destination) {
          throw new Error("مبدأ و مقصد نمی‌توانند یکسان باشند.");
        }

        if (
          ![adult, child, infant].every(Number.isInteger) ||
          adult < 1 ||
          child < 0 ||
          infant < 0 ||
          infant > adult
        ) {
          throw new Error("تعداد مسافران معتبر نیست.");
        }

        if (isRoundTrip && (!returnDate || returnDate <= departureDate)) {
          throw new Error("تاریخ رفت و برگشت معتبر نیست.");
        }

        if (flightType !== "domestic" && flightType !== "international") {
          throw new Error("نوع پرواز معتبر نیست.");
        }

        const supabase = createClient();

        const { data: cities, error: citiesError } = await supabase
          .from("cities")
          .select(
            `
            id,
            name,
            airports:airports!airports_city_id_fkey (
              id
            )
          `,
          )
          .in("name", [origin, destination]);

        if (citiesError) throw citiesError;

        const originCities = (cities ?? []).filter(
          (city) => city.name === origin,
        );

        const destinationCities = (cities ?? []).filter(
          (city) => city.name === destination,
        );

        if (originCities.length !== 1 || destinationCities.length !== 1) {
          throw new Error("شهر مبدأ یا مقصد پیدا نشد یا نام آن تکراری است.");
        }

        const originAirportIds = originCities[0].airports.map((airport) =>
          Number(airport.id),
        );

        const destinationAirportIds = destinationCities[0].airports.map(
          (airport) => Number(airport.id),
        );

        if (!originAirportIds.length || !destinationAirportIds.length) {
          throw new Error("برای شهر مبدأ یا مقصد فرودگاهی پیدا نشد.");
        }

        const commonParams = {
          isInternational: flightType === "international",
          cabinClass,
          seatsRequired: adult + child,
        };

        const [outboundResults, returnResults] = await Promise.all([
          fetchFlightLeg(supabase, {
            ...commonParams,
            originAirportIds,
            destinationAirportIds,
            flightDate: departureDate,
          }),

          isRoundTrip
            ? fetchFlightLeg(supabase, {
                ...commonParams,
                originAirportIds: destinationAirportIds,
                destinationAirportIds: originAirportIds,
                flightDate: returnDate!,
              })
            : Promise.resolve<FlightSearchRows>([]),
        ]);

        if (isMounted) {
          setOutboundFlights(outboundResults);
          setReturnFlights(returnResults);
        }
      } catch (error) {
        console.error("Flight search error:", error);

        if (isMounted) {
          setError(
            error instanceof Error
              ? error.message
              : "در جستجوی پروازها خطایی رخ داد. لطفاً دوباره تلاش کنید.",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    searchFlights();

    return () => {
      isMounted = false;
    };
  }, [searchParams]);

  return {
    searchValues,
    outboundFlights,
    returnFlights,
    isLoading,
    error,
  };
}
