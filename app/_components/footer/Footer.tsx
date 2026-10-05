import Container from "../Container";
import MobileFooter from "./components/mobile/MobileFooter";
import DesktopFooter from "./components/desktop/DesktopFooter";

export default function Footer() {
  return (
    <Container className="py-8 md:py-6">
      <div className="md:hidden">
        <MobileFooter />
      </div>
      <div className="max-md:hidden">
        <DesktopFooter />
      </div>
    </Container>
  );
}
