import Hero from "./_components/hero/Hero";
import FlightSearch from "./_components/flight/FlightSearch";
import SearchHistory from "./_components/history/SearchHistory";
import TravelDestinations from "./_components/destinations/TravelDestinations";
import PopularFlights from "./_components/popular/PopularFlights";
import FaqSection from "./_components/faq/FaqSection";
import FeaturesSection from "./_components/features/FeaturesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FlightSearch />
      <SearchHistory />
      <TravelDestinations />
      <PopularFlights />
      <FaqSection />
      <FeaturesSection />
    </>
  );
}
