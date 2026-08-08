import MobileHeader from "./components/mobile/MobileHeader";
import DesktopHeader from "./components/desktop/DesktopHeader";

export default function Header() {
  return (
    <>
      <div className="md:hidden">
        <MobileHeader />
      </div>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
    </>
  );
}
