import Container from "../Container";
import PopularRoutes from "./components/PopularRoutes";

export default function PopularFlights() {
  return (
    <Container className="flex flex-col gap-4 pt-10">
      <h2 className="text-gray-9 font-medium md:text-lg md:font-extrabold">
        پرطرفدارترین پروازهای داخلی
      </h2>
      <PopularRoutes />
    </Container>
  );
}
