import MobileHeader from "./components/MobileHeader";
import DesktopHeader from "./components/DesktopHeader";

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
