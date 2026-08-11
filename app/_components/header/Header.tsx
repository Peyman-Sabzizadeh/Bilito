import Container from "../Container";
import MobileHeader from "./components/mobile/MobileHeader";
import DesktopHeader from "./components/desktop/DesktopHeader";

export default function Header() {
  return (
    <Container>
      <div className="md:hidden">
        <MobileHeader />
      </div>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
    </Container>
  );
}
