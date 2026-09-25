import Container from "../Container";
import MobileHeader from "./components/mobile/MobileHeader";
import DesktopHeader from "./components/desktop/DesktopHeader";

export default function Header() {
  return (
    <Container className="py-4 lg:py-5 xl:py-7">
      <div className="md:hidden">
        <MobileHeader />
      </div>
      <div className="max-md:hidden">
        <DesktopHeader />
      </div>
    </Container>
  );
}
