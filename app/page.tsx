import Hero from "./_components/hero/Hero";
import FlightSearch from "./_components/flight/FlightSearch";
import SearchHistory from "./_components/history/SearchHistory";
import TravelDestinations from "./_components/destinations/TravelDestinations";

export default function Home() {
  return (
    <>
      <Hero />
      <FlightSearch />
      <SearchHistory />
      <TravelDestinations />
    </>
  );
}
