import Container from "../Container";
import MobileFooter from "./components/mobile/MobileFooter";
import DesktopFooter from "./components/desktop/DesktopFooter";

export default function Footer() {
  return (
    <Container className="py-8 md:py-6">
      <MobileFooter />
      <DesktopFooter />
    </Container>
  );
}
