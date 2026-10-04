import Container from "../Container";
import MobileFooter from "./components/mobile/MobileFooter";

export default function Footer() {
  return (
    <Container className="py-8 md:py-6">
      <div className="md:hidden">
        <MobileFooter />
      </div>
      <div className="max-md:hidden">Desktop Footer</div>
    </Container>
  );
}
