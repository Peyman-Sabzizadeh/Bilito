import Logo from "@/_components/Logo";
import MobileMenu from "./MobileMenu";

export default function MobileHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <MobileMenu />
      </div>
      <div className="w-28 h-auto">
        <Logo />
      </div>
      <div>Account</div>
    </div>
  );
}
