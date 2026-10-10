import Container from "../Container";
import FlightSearchForm from "./FlightSearchForm";

export default function FlightSearch() {
  return (
    <Container className="relative">
      <div className="md:border-gray-2 relative max-md:pt-4 md:-mt-28 md:rounded-lg md:border md:bg-white md:p-6 md:pb-8 md:shadow-lg">
        <FlightSearchForm />
      </div>
    </Container>
  );
}
