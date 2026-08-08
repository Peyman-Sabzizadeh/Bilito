import MobileMenu from "./MobileMenu";
import Logo from "@/_components/Logo";
import MobileAccountLink from "./MobileAccountLink";

export default function MobileHeader() {
  return (
    <div className="flex justify-between items-center">
      <MobileMenu />
      <div className="w-28 h-auto">
        <Logo />
      </div>
      <MobileAccountLink />
    </div>
  );
}
