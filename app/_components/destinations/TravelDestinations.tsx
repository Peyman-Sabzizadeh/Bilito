import Container from "../Container";
import DestinationsSwiper from "./components/mobile/DestinationsSwiper";

export default function TravelDestinations() {
  return (
    <Container className="pt-10">
      <div className="md:hidden">
        <DestinationsSwiper />
      </div>
      <div className="max-md:hidden">مقاصد پروازی: دسکتاپ ویو</div>
    </Container>
  );
}
