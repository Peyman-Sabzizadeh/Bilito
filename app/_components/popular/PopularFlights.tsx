import Container from "../Container";

export default function PopularFlights() {
  return (
    <Container className="flex flex-col gap-4 pt-10">
      <h2 className="text-gray-9 font-medium md:text-lg md:font-extrabold">
        پرطرفدارترین پروازهای داخلی
      </h2>
      <span>Popular cities</span>
      <span>Popular routes</span>
    </Container>
  );
}
