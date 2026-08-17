import { Separator } from "@heroui/react";
import Container from "../Container";
import FlightType from "./FlightType";

export default function SearchFlight() {
  return (
    <Container>
      <div className="border-gray-2 rounded-lg border p-6 shadow-lg">
        <FlightType />
        <Separator className="-mt-0.5 h-0.5" />
      </div>
    </Container>
  );
}
